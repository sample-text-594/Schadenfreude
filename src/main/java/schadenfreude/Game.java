package schadenfreude;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.Random;

import org.springframework.util.ResourceUtils;
import org.springframework.web.socket.TextMessage;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class Game {
	private ObjectMapper mapper = new ObjectMapper();
	
	private Player attackPlayer;
	private Player defensePlayer;
	private Card attackCard;
	
	private String time;
	private int turn;
	
	private final int START_HAND_SIZE = 5;
	
	private Card[] loadedCards;
	
	public Game(Player player1, Player player2) {
		this.attackPlayer = player1;
		this.defensePlayer = player2;

		time = "mañana";
		turn = 0;
		
		loadCards();
		startGame();
	}
	
	private void loadCards() {
		int totalCards = -1;
		int specialCards = -1;
		
		try {
			InputStream fileStream = new FileInputStream(ResourceUtils.getFile("classpath:cards.json"));
			
			JsonNode node;
			node = mapper.readTree(fileStream);
			
			totalCards = node.get("totalCards").asInt();
			specialCards = node.get("specialCards").asInt();
			
			ArrayNode cards = (ArrayNode) node.get("cards");
			Iterator<JsonNode> cardsIterator = cards.elements();
			
			int i = 0;
			loadedCards = new Card[totalCards];
			while (cardsIterator.hasNext()) {
				node = cardsIterator.next();
				loadedCards[i] = new Card(
						node.get("id").asInt(),
						node.get("type").asInt(),
						node.get("stress").asInt(),
						node.get("synergyID").asInt(),
						node.get("synergyModifier").asInt()
				);
				
				i++;
			}
		} catch (FileNotFoundException e) {
			System.err.println("Error trying to open card list");
		} catch (IOException e) {
			System.err.println("Error trying to read card list");
		}
		
		fillDecks(totalCards, specialCards);
	}
	
	private void fillDecks(int totalCards, int specialCards) {
		Card[] player1Deck = new Card[totalCards / 2];
		Card[] player2Deck = new Card[totalCards / 2];
		
		//Llenamos los mazos de los jugadores
		for (int i = 0; i < (totalCards - specialCards) / 2; i++) {
			player1Deck[i] = loadedCards[i];
			player2Deck[i] = loadedCards[(totalCards - specialCards) / 2 + i];
		}
		
		//Preparamos las cartas especiales y las mezclamos
		Card[] specialCardsArr = new Card[6];
		
		for (int i = 0; i < specialCards; i++) {
			specialCardsArr[i] = loadedCards[(totalCards - specialCards) + i];
		}
		
		Random rand = new Random();
		for (int i = specialCardsArr.length - 1; i > 0; i--) {
			int index = rand.nextInt(i + 1);
			  
			Card c = specialCardsArr[index];
			specialCardsArr[index] = specialCardsArr[i];
			specialCardsArr[i] = c;
		}
		
		//Añadimos equitativamente las cartas especiales a los mazos de los jugadores
		for (int i = 0; i < specialCards / 2; i++) {
			player1Deck[(totalCards - specialCards) / 2 + i] = specialCardsArr[i];
		}
		
		for (int i = 0; i < specialCards / 2; i++) {
			player2Deck[(totalCards - specialCards) / 2 + i] = specialCardsArr[specialCards / 2 + i];
		}
		
		//Colocamos las cartas en cada jugador, las mezclamos y robamos la mano inicial
		attackPlayer.fillDeck(player1Deck);
		defensePlayer.fillDeck(player2Deck);
		
		attackPlayer.shuffleDeck();
		defensePlayer.shuffleDeck();
		
		attackPlayer.drawCard(START_HAND_SIZE);
		defensePlayer.drawCard(START_HAND_SIZE);
	}
	
	private int[] getCardsAllowed() {
		int[] arr;
		switch (time) {
			case ("mañana"):
				arr = new int[3];
			
				arr[0] = 0;
				arr[1] = 2;
				arr[2] = 5;
				break;
			case ("mediodia"):
				arr = new int[3];
			
				arr[0] = 1;
				arr[1] = 3;
				arr[2] = 5;
				break;
			case ("tarde"):
				arr = new int[4];
			
				arr[0] = 0;
				arr[1] = 3;
				arr[2] = 4;
				arr[3] = 5;
				break;
			case ("noche"):
				arr = new int[4];
			
				arr[0] = 1;
				arr[1] = 2;
				arr[2] = 4;
				arr[3] = 5;
				break;
			default:
				arr = new int[0];
		}
		
		return arr;
	}
	
	private void startGame() {
		ObjectNode msg;
		ArrayNode cardArray1;
		ArrayNode cardArrayType1;
		ArrayNode cardArray2;
		ArrayNode cardArrayType2;
		ArrayNode cardsAllowed;
		
		msg = mapper.createObjectNode();
		cardArray1 = mapper.createArrayNode();
		cardArrayType1 = mapper.createArrayNode();
		cardArray2 = mapper.createArrayNode();
		cardArrayType2 = mapper.createArrayNode();
		cardsAllowed = mapper.createArrayNode();
		
		for (Card c : attackPlayer.getHand()) {
			if (c != null) {
				if (c.getType() != 5) {
					cardArray1.add(c.getId());
				} else {
					cardArray1.add(c.getId() + "a");
				}
				
				cardArrayType1.add(c.getType());
			} else {
				cardArray1.add(-1);
				cardArrayType1.add(-1);
			}
		}
		
		for (Card c : defensePlayer.getHand()) {
			if (c != null) {
				if (c.getType() != 5) {
					cardArray2.add(c.getId());
				} else {
					cardArray2.add(c.getId() + "b");
				}
				
				cardArrayType2.add(c.getType());
			} else {
				cardArray2.add(-1);
				cardArrayType2.add(-1);
			}
		}
		
		for (int a : getCardsAllowed()) {
			cardsAllowed.add(a);
		}
		
		attackPlayer.setSide("ataque");
		defensePlayer.setSide("defensa");
		
		msg.put("event", "GAME READY");
		msg.put("roomid", attackPlayer.getRoomId());
		msg.put("handsize", attackPlayer.getHandSize());
		msg.put("stress", attackPlayer.getStress());
		
		msg.put("turn", attackPlayer.getTurn());
		msg.put("side", attackPlayer.getSide());
		
		msg.putPOJO("hand", cardArray1);
		msg.putPOJO("handTypes", cardArrayType1);
		msg.putPOJO("cardsAllowed", cardsAllowed);
		
		try {
			attackPlayer.getSession().sendMessage(new TextMessage(msg.toString()));
			
			msg.replace("hand", cardArray2);
			msg.replace("handTypes", cardArrayType2);
			msg.put("turn", defensePlayer.getTurn());
			msg.put("side", defensePlayer.getSide());
			defensePlayer.getSession().sendMessage(new TextMessage(msg.toString()));
		} catch (Exception e) {
			System.err.println("Exception sending GAME READY message");
			e.printStackTrace(System.err);
		}
		
		beginTurn("ataque");
	}
	
	private void playCard(int id, int cardPos) {
		Card c;
		ObjectNode msg;
		
		msg = mapper.createObjectNode();
		
		if (id == attackPlayer.getId()) {
			c = attackPlayer.useCard(cardPos);
			attackCard = c;
			
			attackPlayer.setTurn(0);
			defensePlayer.setTurn(1);
			
			msg.put("event", "ATTACK CARD PLAYED");
			msg.put("cardType", c.getType());
			
			try {
				defensePlayer.getSession().sendMessage(new TextMessage(msg.toString()));
			} catch (IOException e) {
				System.err.println("Exception sending ATTACK CARD PLAYED message");
				e.printStackTrace(System.err);
			}
			
			beginTurn("defensa");
		} else {
			c = defensePlayer.useCard(cardPos);
			
			int stressMod;
			if (c.getType() != 5) {
				stressMod = attackCard.getStress() + c.getStress();
			} else {
				stressMod = attackCard.getStress() - c.getStress();
			}
			if (c.getSynergyID() == attackCard.getId()) {
				stressMod += c.getSynergyModifier();
			} else if (attackCard.getSynergyID() == c.getId()) {
				stressMod += attackCard.getSynergyModifier();
			}
			
			defensePlayer.setStress(defensePlayer.getStress() + stressMod);
			
			msg.put("event", "DEFENSE CARD PLAYED");
			if (attackCard.getType() != 5) {
				msg.put("attackCardId", attackCard.getId());
			} else {
				msg.put("attackCardId", attackCard.getId() + "a");
			}
			if (c.getType() != 5) {
				msg.put("defenseCardId", c.getId());
			} else {
				msg.put("defenseCardId", c.getId() + "b");
			}
			msg.put("stress", defensePlayer.getStress());
			
			try {
				attackPlayer.getSession().sendMessage(new TextMessage(msg.toString()));
				defensePlayer.getSession().sendMessage(new TextMessage(msg.toString()));
			} catch (IOException e) {
				System.err.println("Exception sending DEFENSE CARD PLAYED message");
				e.printStackTrace(System.err);
			}
			
			attackPlayer.setTurn(1);
			defensePlayer.setTurn(0);
			
			advanceTime();
			if (time != "turnOver") {
				beginTurn("ataque");
			} else {
				swapRoles();
			}
		}
	}
	
	private void beginTurn(String side) {
		ObjectNode msg;
		ArrayNode cardArray;
		ArrayNode cardArrayType;
		
		msg = mapper.createObjectNode();
		cardArray = mapper.createArrayNode();
		cardArrayType = mapper.createArrayNode();
		
		msg.put("event", "BEGIN TURN");
		
		if (side == "defensa") {
			if (defensePlayer.canDraw(1)) {
				defensePlayer.drawCard(1);
			}
				
			for (Card c : defensePlayer.getHand()) {
				if (c != null) {
					if (c.getType() != 5) {
						cardArray.add(c.getId());
					} else {
						cardArray.add(c.getId() + "b");
					}
					
					cardArrayType.add(c.getType());
				} else {
					cardArray.add(-1);
					cardArrayType.add(-1);
				}
			}
			
			msg.putPOJO("hand", cardArray);
			msg.putPOJO("handTypes", cardArrayType);
			msg.put("time", time);
			
			try {
				defensePlayer.getSession().sendMessage(new TextMessage(msg.toString()));
			} catch (IOException e) {
				System.err.println("Exception sending BEGIN TURN message");
				e.printStackTrace(System.err);
			}
			
		} else {
			if (attackPlayer.canDraw(1)) {
				attackPlayer.drawCard(1);
			}
			
			for (Card c : attackPlayer.getHand()) {
				if (c != null) {
					if (c.getType() != 5) {
						cardArray.add(c.getId());
					} else {
						cardArray.add(c.getId() + "a");
					}
					
					cardArrayType.add(c.getType());
				} else {
					cardArray.add(-1);
					cardArrayType.add(-1);
				}
			}
			
			ArrayNode cardsAllowed;
			
			cardsAllowed = mapper.createArrayNode();
			
			for (int a : getCardsAllowed()) {
				cardsAllowed.add(a);
			}
			
			msg.putPOJO("hand", cardArray);
			msg.putPOJO("handTypes", cardArrayType);
			msg.putPOJO("cardsAllowed", cardsAllowed);
			msg.put("time", time);
			
			try {
				attackPlayer.getSession().sendMessage(new TextMessage(msg.toString()));
			} catch (IOException e) {
				System.err.println("Exception sending BEGIN TURN message");
				e.printStackTrace(System.err);
			}
		}
	}
	
	private void swapRoles() {
		ObjectNode msg;
		ArrayNode cardArray1;
		ArrayNode cardArrayType1;
		ArrayNode cardArray2;
		ArrayNode cardArrayType2;
		ArrayNode cardsAllowed;
		
		msg = mapper.createObjectNode();
		cardArray1 = mapper.createArrayNode();
		cardArrayType1 = mapper.createArrayNode();
		cardArray2 = mapper.createArrayNode();
		cardArrayType2 = mapper.createArrayNode();
		cardsAllowed = mapper.createArrayNode();
		
		attackPlayer.swapSide();
		defensePlayer.swapSide();
		time = "mañana";
		
		Player auxPlayer = attackPlayer;
		attackPlayer = defensePlayer;
		defensePlayer = auxPlayer;
		
		for (Card c : attackPlayer.getHand()) {
			if (c != null) {
				if (c.getType() != 5) {
					cardArray1.add(c.getId());
				} else {
					cardArray1.add(c.getId() + "a");
				}
				
				cardArrayType1.add(c.getType());
			} else {
				cardArray1.add(-1);
				cardArrayType1.add(-1);
			}
		}
		
		for (Card c : defensePlayer.getHand()) {
			if (c != null) {
				if (c.getType() != 5) {
					cardArray2.add(c.getId());
				} else {
					cardArray2.add(c.getId() + "b");
				}
				
				cardArrayType2.add(c.getType());
			} else {
				cardArray2.add(-1);
				cardArrayType2.add(-1);
			}
		}
		
		for (int a : getCardsAllowed()) {
			cardsAllowed.add(a);
		}
		
		msg.put("event", "SIDE SWAP");
		msg.put("stress", defensePlayer.getStress());
		msg.put("side", attackPlayer.getSide());
		
		msg.putPOJO("hand", cardArray1);
		msg.putPOJO("handTypes", cardArrayType1);
		msg.putPOJO("cardsAllowed", cardsAllowed);
		
		try {
			attackPlayer.getSession().sendMessage(new TextMessage(msg.toString()));
		} catch (IOException e) {
			System.err.println("Exception sending SIDE SWAP message");
			e.printStackTrace(System.err);
		}
		
		msg.put("side", defensePlayer.getSide());
		
		msg.replace("hand", cardArray2);
		msg.replace("handTypes", cardArrayType2);
		
		try {
			defensePlayer.getSession().sendMessage(new TextMessage(msg.toString()));
		} catch (IOException e) {
			System.err.println("Exception sending SIDE SWAP message");
			e.printStackTrace(System.err);
		}
		
		beginTurn("ataque");
	}
	
	private void advanceTime() {
		if (turn < 1) {
			turn++;
		} else {
			switch (time) {
				case ("mañana"):
					time = "mediodia";
					break;
				case ("mediodia"):
					time = "tarde";
					break;
				case ("tarde"):
					time = "noche";
					break;
				case ("noche"):
					time = "turnOver";
					break;
			}
			
			turn = 0;
		}
	}
	
	public void handleMessage(JsonNode node, int playerID) {
		switch (node.get("event").asText()) {
			case "PLAY CARD":
				playCard(playerID, node.get("index").asInt());
				break;
		}
	}
}

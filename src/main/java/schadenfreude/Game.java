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
	
	private Player player1;
	private Player player2;
	
	private final int START_HAND_SIZE = 5;
	
	private Card[] loadedCards;
	
	public Game(Player player1, Player player2) {
		this.player1 = player1;
		this.player2 = player2;
		
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
		player1.fillDeck(player1Deck);
		player2.fillDeck(player2Deck);
		
		player1.shuffleDeck();
		player2.shuffleDeck();
		
		player1.drawCard(START_HAND_SIZE);
		player2.drawCard(START_HAND_SIZE);
	}
	
	public void startGame() {
		ObjectNode msg;
		ArrayNode cardArray1;
		ArrayNode cardArray2;
		
		msg = mapper.createObjectNode();
		cardArray1 = mapper.createArrayNode();
		cardArray2 = mapper.createArrayNode();
		
		for (Card c : player1.getHand()) {
			if (c != null) {
				if (c.getType() != 5) {
					cardArray1.add(c.getId());
				} else {
					cardArray1.add(c.getId() + "a");
				}
			}
		}
		
		for (Card c : player2.getHand()) {
			if (c != null) {
				if (c.getType() != 5) {
					cardArray2.add(c.getId());
				} else {
					cardArray2.add(c.getId() + "b");
				}
			}
		}
		
		msg.put("event", "GAME READY");
		msg.put("roomid", player1.getRoomId());
		msg.put("handsize", player1.getHandSize());
		msg.put("stress", player1.getStress());
		
		msg.putPOJO("hand", cardArray1);
		
		try {
			player1.getSession().sendMessage(new TextMessage(msg.toString()));
			
			msg.replace("hand", cardArray2);
			player2.getSession().sendMessage(new TextMessage(msg.toString()));
		} catch (Exception e) {
			System.err.println("Exception sending GAME READY message");
			e.printStackTrace(System.err);
		}
	}
	
	public void handleMessage(JsonNode node) {
		switch (node.get("method").asText()) {
			case "PLAY CARD":
				break;
		}
	}
}

package schadenfreude;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.Random;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;

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
	}
	
	private void loadCards() {
		try {
			InputStream fileStream = new FileInputStream("cards.json");
			
			JsonNode node;
			node = mapper.readTree(fileStream);
			
			int totalCards = node.get("totalCards").asInt();
			int specialCards = node.get("specialCards").asInt();
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
			
			fillDecks(totalCards, specialCards);
		} catch (FileNotFoundException e) {
			System.out.println("Error trying to open card list");
		} catch (IOException e) {
			System.out.println("Error trying to read card list");
		}
	}
	
	private void fillDecks(int totalCards, int specialCards) {
		Card[] player1Deck = new Card[totalCards / 2];
		Card[] player2Deck = new Card[totalCards / 2];
		
		//Llenamos los mazos de los jugadores
		for (int i = 0; i < (totalCards - specialCards) / 2; i++) {
			player1Deck[i] = loadedCards[i];
			player2Deck[i] = loadedCards[i + (totalCards - specialCards) / 2];
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
			player1Deck[(totalCards - specialCards) + i] = specialCardsArr[i];
		}
		
		for (int i = 0; i < specialCards / 2; i++) {
			player2Deck[(totalCards - specialCards) + i] = specialCardsArr[specialCards / 2 + i];
		}
		
		//Colocamos las cartas en cada jugador, las mezclamos y robamos la mano inicial
		player1.fillDeck(player1Deck);
		player2.fillDeck(player2Deck);
		
		player1.shuffleDeck();
		player2.shuffleDeck();
		
		player1.drawCard(START_HAND_SIZE);
		player2.drawCard(START_HAND_SIZE);
	}
	
	public void handleMessage(JsonNode node) {
		switch (node.get("method").asText()) {
			case "":
				break;
		}
	}
}

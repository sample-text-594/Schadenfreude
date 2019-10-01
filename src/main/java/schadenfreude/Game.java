package schadenfreude;

import java.util.Random;

import com.fasterxml.jackson.databind.JsonNode;

public class Game {
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
		//TODO Cargar listado de cartas desde un archivo
		fillDecks(56, 6);
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

package schadenfreude;

import java.util.Random;

public class Game {
	private Player player1;
	private Player player2;
	
	private int totalCards;
	private int specialCards;
	private Card[] loadedCards;
	private Card[] player1Deck;
	private Card[] player2Deck;
	
	private Random rand;
	
	public Game(Player player1, Player player2) {
		this.player1 = player1;
		this.player2 = player2;
		
		player1Deck = new Card[totalCards / 2];
		player2Deck = new Card[totalCards / 2];
		
		rand = new Random();
		
		loadCards();
		fillDecks();
	}
	
	public void loadCards() {
		//TODO Cargar listado de cartas desde un archivo
	}
	
	public void fillDecks() {
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
		
		for (int i = specialCardsArr.length - 1; i > 0; i--) {
			int index = rand.nextInt(i + 1);
			  
			Card c = specialCardsArr[index];
			specialCardsArr[index] = specialCardsArr[i];
			specialCardsArr[i] = c;
		}
		
		//Mezclamos las cartas del mazo del jugador 1 y añadimos la mitad de las especiales
		for (int i = player1Deck.length - 1 - specialCards / 2; i > 0; i--) {
			int index = rand.nextInt(i + 1);
			  
			Card c = player1Deck[index];
			player1Deck[index] = player1Deck[i];
			player1Deck[i] = c;
		}
		
		for (int i = 0; i < specialCards / 2; i++) {
			player1Deck[(totalCards - specialCards) + i] = specialCardsArr[i];
		}
		
		//Mezclamos las cartas del mazo del jugador 2 y añadimos la mitad de las especiales
		for (int i = player2Deck.length - 1 - specialCards / 2; i > 0; i--) {
			int index = rand.nextInt(i + 1);
			  
			Card c = player2Deck[index];
			player2Deck[index] = player2Deck[i];
			player2Deck[i] = c;
		}
		
		for (int i = 0; i < specialCards / 2; i++) {
			player2Deck[(totalCards - specialCards) + i] = specialCardsArr[specialCards / 2 + i];
		}
	}
	
	public void handleMessage() {
		
	}
}

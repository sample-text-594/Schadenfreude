package schadenfreude;

import java.util.Random;

import org.springframework.web.socket.WebSocketSession;

public class Player {
	private WebSocketSession session;
	private int id;
	private int roomId;
	
	private final int MAX_HAND_SIZE = 6;
	private Card[] hand;
	private Card[] deck;
	private int handSize;
	private int deckPosition;
	private int stress;
	
	public Player(WebSocketSession session, int id) {
		this.session = session;
		this.id = id;
		
		this.hand = new Card[MAX_HAND_SIZE];
		this.handSize = 0;
		this.stress = 0;
	}

	public int getId() {
		return id;
	}
	
	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public int getStress() {
		return stress;
	}

	public void setStress(int stress) {
		this.stress = stress;
	}

	public boolean canDraw(int num) {
		return (handSize + num) < MAX_HAND_SIZE ;
	}
	
	public void fillDeck(Card[] deck) {
		this.deck = deck;
	}
	
	public void shuffleDeck() {
		Random rand = new Random();
		for (int i = deck.length - 1; i > 0; i--) {
			int index = rand.nextInt(i + 1);
			  
			Card c = deck[index];
			deck[index] = deck[i];
			deck[i] = c;
		}
		
		deckPosition = 0;
	}
	
	public void drawCard(int draws) {
		for(int i = 0; i < draws; i++) {
			hand[handSize] = deck[deckPosition];
			handSize++;
			deckPosition++;
		}
	}
	
	public void useCard(int pos) {
		for(int i = pos ; i < handSize - 1; i++) {
			hand[i] = hand[i + 1];
		}
		
		hand[handSize] = null;
		handSize--;
	}
}

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
	
	private int turn;
	private String side;
	
	public Player(WebSocketSession session, int id) {
		this.session = session;
		this.id = id;
		
		this.hand = new Card[MAX_HAND_SIZE];
		this.handSize = 0;
		this.stress = 0;
		this.turn = 0;
	}
	
	//Getters and setters
	public WebSocketSession getSession() {
		return session;
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
	
	public Card[] getHand() {
		return hand;
	}

	public int getHandSize() {
		return handSize;
	}

	public int getStress() {
		return stress;
	}

	public void setStress(int stress) {
		if (stress < 0) {
			this.stress = 0;
		} else {
			this.stress = stress;
		}
	}

	public int getTurn() {
		return turn;
	}

	public void setTurn(int turn) {
		this.turn = turn;
	}

	public String getSide() {
		return side;
	}

	public void setSide(String side) {
		this.side = side;
	}

	//Methods
	public boolean canDraw(int num) {
		return (handSize + num - 1) < MAX_HAND_SIZE ;
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
			for(int j = 0; j < MAX_HAND_SIZE; j++) {
				if (hand[j] == null) {
					hand[j] = deck[deckPosition];
					handSize++;
					deckPosition++;
					break;
				}
			}
		}
	}
	
	public Card useCard(int pos) {
		Card c = hand[pos];
		hand[pos] = null;
		handSize--;
		
		return c;
	}
	
	public void swapSide() {
		if (side == "ataque") {
			side = "defensa";
			
			for (int i = 0; i < deck.length; i++) {
				if (deck[i].getType() != 5) {
					deck[i].setId(deck[i].getId() + 25);
					deck[i].setStress(-deck[i].getStress());
				}
			}
		} else {
			side = "ataque";
			
			for (int i = 0; i < deck.length; i++) {
				if (deck[i].getType() != 5) {
					deck[i].setId(deck[i].getId() - 25);
					deck[i].setStress(-deck[i].getStress());
				}
			}
		}
	}
}

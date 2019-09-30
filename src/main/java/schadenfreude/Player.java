package schadenfreude;

import org.springframework.web.socket.WebSocketSession;

public class Player {
	private WebSocketSession session;
	private int id;
	
	private final int MAX_HAND_SIZE = 6;
	private Card[] hand;
	private int stress;
	
	public Player(WebSocketSession session, int id) {
		this.session = session;
		this.id = id;
		
		this.hand = new Card[MAX_HAND_SIZE];
		this.stress = 0;
	}

	public int getId() {
		return id;
	}
}

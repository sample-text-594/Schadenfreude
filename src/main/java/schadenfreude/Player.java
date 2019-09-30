package schadenfreude;

import org.springframework.web.socket.WebSocketSession;

public class Player {
	private WebSocketSession session;
	private int id;
	
	public Player(WebSocketSession session, int id) {
		super();
		this.session = session;
		this.id = id;
	}

	public int getId() {
		return id;
	}
}

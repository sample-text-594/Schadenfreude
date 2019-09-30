package schadenfreude;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebsocketGameHandler extends TextWebSocketHandler {
	private static final String PLAYER_ATTRIBUTE = "PLAYER";
	Matchmaking matchmaking = new Matchmaking();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		Player p = matchmaking.addPlayer(session);
		session.getAttributes().put(PLAYER_ATTRIBUTE, p);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		matchmaking.removePlayer(((Player) session.getAttributes().get(PLAYER_ATTRIBUTE)).getId());
	}
}

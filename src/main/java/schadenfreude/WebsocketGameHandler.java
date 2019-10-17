package schadenfreude;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class WebsocketGameHandler extends TextWebSocketHandler {
	private static final String PLAYER_ATTRIBUTE = "PLAYER";
	private ObjectMapper mapper = new ObjectMapper();
	
	private Matchmaking matchmaking = new Matchmaking();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		synchronized(session) {
			Player p = matchmaking.addPlayer(session);
			session.getAttributes().put(PLAYER_ATTRIBUTE, p);
		}
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		try {
			JsonNode node;
			Player p;
			
			synchronized(mapper) {
				node = mapper.readTree(message.getPayload());
			}
			
			synchronized(session) {
				p = (Player) session.getAttributes().get(PLAYER_ATTRIBUTE);
			}
			
			if (node.get("type").asText().equals("MATCHMAKING")) {
				switch (node.get("event").asText()) {
					case "PUT ON QUEUE":
						matchmaking.putPlayerOnQueue(p);
						break;
					case "DELETE GAME":
						matchmaking.deleteGame(p.getRoomId());
						break;
				}
			} else {
				matchmaking.serveMessage(node, p);
			}
		} catch (Exception e) {
			System.err.println("Exception processing message " + message.getPayload());
			e.printStackTrace(System.err);
		}
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		synchronized(session) {
			matchmaking.removePlayer(((Player) session.getAttributes().get(PLAYER_ATTRIBUTE)).getId());
		}
	}
}

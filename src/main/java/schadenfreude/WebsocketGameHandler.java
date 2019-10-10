package schadenfreude;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketGameHandler extends TextWebSocketHandler {
	private static final String PLAYER_ATTRIBUTE = "PLAYER";
	private ObjectMapper mapper = new ObjectMapper();
	
	private Matchmaking matchmaking = new Matchmaking();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		Player p = matchmaking.addPlayer(session);
		session.getAttributes().put(PLAYER_ATTRIBUTE, p);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		try {
			JsonNode node;
			ObjectNode msg;
			
			node = mapper.readTree(message.getPayload());
			msg = mapper.createObjectNode();
			
			if (node.get("type").asText().equals("MATCHMAKING")) {
				switch (node.get("event").asText()) {
					case "PUT ON QUEUE":
						matchmaking.putPlayerOnQueue((Player) session.getAttributes().get(PLAYER_ATTRIBUTE));
						break;
				}
			} else {
				matchmaking.serveMessage(node, (Player) session.getAttributes().get(PLAYER_ATTRIBUTE));
			}
		} catch (Exception e) {
			System.err.println("Exception processing message " + message.getPayload());
			e.printStackTrace(System.err);
		}
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		matchmaking.removePlayer(((Player) session.getAttributes().get(PLAYER_ATTRIBUTE)).getId());
	}
}

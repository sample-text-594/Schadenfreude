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
		Player p = matchmaking.addPlayer(session);
		session.getAttributes().put(PLAYER_ATTRIBUTE, p);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		JsonNode node;
		
		node = mapper.readTree(message.getPayload());
		
		if (node.get("type").asText() == "MATCHMAKING") {
			switch (node.get("method").asText()) {
				case "PUTONQUEUE":
					matchmaking.putPlayerOnQueue((Player) session.getAttributes().get(PLAYER_ATTRIBUTE));
					break;
			}
		} else {
			matchmaking.serveMessage(node, (Player) session.getAttributes().get(PLAYER_ATTRIBUTE));
		}
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		matchmaking.removePlayer(((Player) session.getAttributes().get(PLAYER_ATTRIBUTE)).getId());
	}
}

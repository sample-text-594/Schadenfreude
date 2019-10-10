package schadenfreude;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.JsonNode;

public class Matchmaking {
	private Map<Integer, Game> rooms;
	private Map<Integer, Player> playersIDMap;
	private Queue<Player> playersWaitingQueue;
	
	private int playersID = 0;
	private int playersWaiting = 0;
	private int roomsID = 0;
	
	private ScheduledExecutorService scheduler;
	
	public Matchmaking() {
		rooms = new HashMap<>();
		playersIDMap = new HashMap<>();
		playersWaitingQueue = new LinkedList<>();
		
		if (scheduler == null) {
			scheduler = Executors.newScheduledThreadPool(1);
			scheduler.scheduleAtFixedRate(() -> createGame(), 1, 1, TimeUnit.SECONDS);
		}
	}
	
	public Player addPlayer(WebSocketSession session) {
		Player p = new Player(session, playersID);
		
		playersIDMap.put(playersID, p);
		playersID++;
		
		return p;
	}
	
	public Player removePlayer(int id) {
		return playersIDMap.remove(id);
	}
	
	public void putPlayerOnQueue(Player p) {
		playersWaitingQueue.add(p);
		playersWaiting++;
	}
	
	private void createGame() {
		if (playersWaiting > 1) {
			playersWaiting -= 2;
			Player p1 = playersWaitingQueue.remove();
			Player p2 = playersWaitingQueue.remove();
			
			p1.setRoomId(roomsID);
			p2.setRoomId(roomsID);
			
			Game g = new Game(p1, p2);
			g.startGame();
			
			rooms.put(roomsID, g);
			
			roomsID++;
		}
	}
	
	public void serveMessage(JsonNode node, Player p) {
		rooms.get(p.getRoomId()).handleMessage(node);
	}
}

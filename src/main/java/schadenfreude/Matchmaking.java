package schadenfreude;

import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.JsonNode;

public class Matchmaking {
	private Map<Integer, Game> rooms;
	private Map<Integer, Player> playersIDMap;
	private BlockingQueue<Player> playersWaitingQueue;
	
	private AtomicInteger playersID = new AtomicInteger(0);
	private AtomicInteger playersWaiting = new AtomicInteger(0);
	private int roomsID = 0;
	
	private ScheduledExecutorService scheduler;
	
	public Matchmaking() {
		rooms = new ConcurrentHashMap<>();
		playersIDMap = new ConcurrentHashMap<>();
		playersWaitingQueue = new LinkedBlockingQueue<Player>();
		
		if (scheduler == null) {
			scheduler = Executors.newScheduledThreadPool(1);
			scheduler.scheduleAtFixedRate(() -> createGame(), 1, 1, TimeUnit.SECONDS);
		}
	}
	
	public Player addPlayer(WebSocketSession session) {
		Player p = new Player(session, playersID.getAndIncrement());
		
		playersIDMap.put(p.getId(), p);
		
		return p;
	}
	
	public Player removePlayer(int id) {
		return playersIDMap.remove(id);
	}
	
	public void putPlayerOnQueue(Player p) {
		playersWaitingQueue.add(p);
		playersWaiting.incrementAndGet();
	}
	
	private void createGame() {
		if (playersWaiting.get() > 1) {
			playersWaiting.addAndGet(-2);
			Player p1 = playersWaitingQueue.remove();
			Player p2 = playersWaitingQueue.remove();
			
			p1.setRoomId(roomsID);
			p2.setRoomId(roomsID);
			
			Game g = new Game(p1, p2);
			
			rooms.put(roomsID, g);
			
			roomsID++;
		}
	}
	
	public void deleteGame(int roomID) {
		rooms.remove(roomID);
	}
	
	public void serveMessage(JsonNode node, Player p) {
		rooms.get(p.getRoomId()).handleMessage(node, p.getId());
	}
}

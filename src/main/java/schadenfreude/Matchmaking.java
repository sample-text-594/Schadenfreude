package schadenfreude;

import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.JsonNode;

public class Matchmaking {
	private Map<Integer, Game> rooms;
	private Map<Integer, Player> playersIDMap;
	private BlockingQueue<Player> playersWaitingQueue;
	
	private AtomicInteger playersID;
	private AtomicInteger playersWaiting;
	private int roomsID = 0;
	
	private ScheduledExecutorService scheduler;
	private Lock queueLock;
	
	public Matchmaking() {
		rooms = new ConcurrentHashMap<>();
		playersIDMap = new ConcurrentHashMap<>();
		playersWaitingQueue = new LinkedBlockingQueue<Player>();
		
		playersID = new AtomicInteger(0);
		playersWaiting = new AtomicInteger(0);
		
		queueLock = new ReentrantLock();
		
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
	
	public void removePlayer(int id) {
		Player p = playersIDMap.remove(id);
		
		try {
			queueLock.lock();
			
			playersWaiting.decrementAndGet();
			playersWaitingQueue.remove(p);
		} finally {
			queueLock.unlock();
		}
		
		if (p.getRoomId() != -1) {
			rooms.get(p.getRoomId()).endGame(false, true, id);
			rooms.remove(p.getRoomId());
		}
	}
	
	public void putPlayerOnQueue(Player p) {
		playersWaitingQueue.add(p);
		playersWaiting.incrementAndGet();
	}
	
	private void createGame() {
		try {
			queueLock.lock();
			
			if (playersWaiting.get() > 1) {
				playersWaiting.decrementAndGet();
				Player p1 = playersWaitingQueue.remove();
				
				playersWaiting.decrementAndGet();
				Player p2 = playersWaitingQueue.remove();
				
				p1.setRoomId(roomsID);
				p2.setRoomId(roomsID);
				
				Game g = new Game(p1, p2);
				
				rooms.put(roomsID, g);
				
				roomsID++;
			}
		} finally {
			queueLock.unlock();
		}
	}
	
	public void deleteGame(int roomID) {
		rooms.remove(roomID);
	}
	
	public void serveMessage(JsonNode node, Player p) {
		rooms.get(p.getRoomId()).handleMessage(node, p.getId());
	}
}

package schadenfreude;

import java.util.Map;
import java.util.Queue;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.web.socket.WebSocketSession;

public class Matchmaking {
	private Map<Integer, Game> rooms;
	private Map<Integer, Player> playersIDMap;
	private Queue<Player> playersWaitingQueue;
	
	private int playersID = 0;
	private int playersWaiting = 0;
	private int roomsID = 0;
	
	private ScheduledExecutorService scheduler;
	
	public Matchmaking() {
		if (scheduler == null) {
			scheduler = Executors.newScheduledThreadPool(1);
			scheduler.scheduleAtFixedRate(() -> createGame(), 1, 1, TimeUnit.SECONDS);
		}
	}
	
	public Player addPlayer(WebSocketSession session) {
		Player p = new Player(session, playersID);
		playersIDMap.put(playersID, p);
		playersWaitingQueue.add(p);
		
		playersID++;
		playersWaiting++;
		
		return p;
	}
	
	public Player removePlayer(int id) {
		return playersIDMap.remove(id);
	}
	
	private void createGame() {
		if (playersWaiting > 1) {
			Player p1 = playersWaitingQueue.remove();
			Player p2 = playersWaitingQueue.remove();
			
			Game g = new Game(p1, p2);
			
			rooms.put(roomsID, g);
			
			roomsID++;
			playersWaiting -= 2;
		}
	}
}

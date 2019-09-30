package schadenfreude;

public class Card {
	private int id;
	private int type;
	private int stress;
	
	private int synergyID;
	private int synergyModifier;
	
	public Card(int id, String title, String description, int type, int stress, int synergyID, int synergyModifier) {
		this.id = id;
		this.type = type;
		this.stress = stress;
		this.synergyID = synergyID;
		this.synergyModifier = synergyModifier;
	}

	public int getId() {
		return id;
	}

	public int getType() {
		return type;
	}

	public int getStress() {
		return stress;
	}

	public int getSynergyID() {
		return synergyID;
	}

	public int getSynergyModifier() {
		return synergyModifier;
	}
}

package schadenfreude;

public class Card {
	private int id;
	private int type; //0 = transporte / 1 = alimentacion / 2 = hogar / 3 = trabajo / 4 sociales / 5 especiales
	private int stress;
	
	private int synergyID;
	private int synergyModifier;
	
	public Card(int id, int type, int stress, int synergyID, int synergyModifier) {
		this.id = id;
		this.type = type;
		this.stress = stress;
		this.synergyID = synergyID;
		this.synergyModifier = synergyModifier;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getType() {
		return type;
	}

	public int getStress() {
		return stress;
	}
	
	public void setStress(int stress) {
		this.stress = stress;
	}

	public int getSynergyID() {
		return synergyID;
	}

	public int getSynergyModifier() {
		return synergyModifier;
	}
}

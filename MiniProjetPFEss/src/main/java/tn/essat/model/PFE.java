package tn.essat.model;
 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class PFE {
	@Id @GeneratedValue (strategy = GenerationType.IDENTITY)
	private Integer id;
	private String titre;
	
	@ManyToOne
	@JoinColumn(name = "typepfe_id")
	@JsonIgnoreProperties("listP")
	private TypePFE typepfe;

	public PFE(Integer id, String titre, TypePFE typepfe) {
		super();
		this.id = id;
		this.titre = titre;
		this.typepfe = typepfe;
	}

	public PFE() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public TypePFE getTypepfe() {
		return typepfe;
	}

	public void setTypepfe(TypePFE typepfe) {
		this.typepfe = typepfe;
	}
	
	
}

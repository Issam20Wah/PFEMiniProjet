package tn.essat.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class TypePFE {
	@Id @GeneratedValue (strategy = GenerationType.IDENTITY)
	private Integer id;
	private String type;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "typepfe")
	
    private List<PFE> PFE_liste;
	
	public TypePFE() {
		this.PFE_liste = new ArrayList<PFE>();
	}
	
	public TypePFE(Integer id, String type) {
		super();
		this.id = id;
		this.type = type;
		this.PFE_liste = new ArrayList<PFE>();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public List<PFE> getListP() {
		return PFE_liste;
	}
	public void setListP(List<PFE> listP) {
		this.PFE_liste = listP;
	}
	public void addpfe(PFE li) {
		this.PFE_liste.add(li);
		
	}
	
	
}

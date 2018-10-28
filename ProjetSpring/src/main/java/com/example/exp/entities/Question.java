package com.example.exp.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Question implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer Id;
	private String contenu;
	private String premierProp;
	private String deuxiemeProp;
	private String troisiemeProp;
	private String quatriemeProp;
	private String reponse;
	
	@ManyToOne
	private NiveauDifficulte niveauDiff;
	
	@JsonIgnore
	@ManyToMany(mappedBy="questions")
	private Collection<Technologie> technologies;
	
	

	public Question() {
		super();
	}	
	
	
	
	
}

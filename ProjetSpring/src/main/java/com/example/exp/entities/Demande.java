package com.example.exp.entities;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.*;
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Entity
public class Demande implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer id;
	private String titre;
	
	
	private String date;
	
	@ManyToOne
	private Recruteur recruteurs;
	
	@JsonIgnore
	@ManyToOne
	private Projet projets;
	
	
   // @JsonIgnore
	@ManyToMany(cascade =CascadeType.MERGE)
	private List<Candidat>candidats;

	public Demande() {
		super();
	}

	public Demande(String titre) {
		super();
		this.titre = titre;
	}
	
	
	
}

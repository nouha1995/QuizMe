package com.example.exp.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Chapitre implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer Id;
	private String nom;
	private String prcntg;
	
	@JsonIgnore
	@ManyToOne
	private Technologie technologies;
	
	@OneToMany(mappedBy="chapitres")
	private List<SousChapitre> sousChapitres;

	public Chapitre() {
		super();
	}
	
	
}

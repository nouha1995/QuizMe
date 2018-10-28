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
public class Technologie implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer Id;
	private String nom;
	private Integer prcntg;
	
	 @JsonIgnore
	@OneToMany(mappedBy ="technologies")
	private List<Chapitre> chapitres;
	
	 @JsonIgnore
	@ManyToMany(mappedBy="Technologies")
	private List<Profile> profiles;

	 @ManyToMany
	 private List<Question> questions;
	 
		@OneToMany(mappedBy="technologie")
		private List<Pourcentage>pourcentages;
	public Technologie() {
		super();
		// TODO Auto-generated constructor stub
	}





	

	
	
}

package com.example.exp.entities;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@Entity
@DiscriminatorValue(value="CAN")

public class Candidat extends Personne {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String status;
	
	/*	@ManyToMany
		private List<Question> questions;
		
		@ManyToMany(mappedBy ="candidats")
		private List<Profile> profiles;*/
		@JsonIgnore
		@ManyToMany(mappedBy ="candidats")
		private List<Demande> demandes;
		

	public Candidat() {
		super();
	}

}

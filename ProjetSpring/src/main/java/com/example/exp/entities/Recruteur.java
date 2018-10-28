package com.example.exp.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@DiscriminatorValue(value="REC")

public class Recruteur extends Personne implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@JsonIgnore
	@OneToMany(mappedBy ="recruteurs")
	private List<Demande> demandes;

	public Recruteur() {
		super();
	}
	
}

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
public class Projet implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer Id;
	private String nom;
	
	 @JsonIgnore
	@OneToMany(mappedBy="projets")
	private Collection<Demande> Demandes;
	
	@ManyToMany(fetch=FetchType.EAGER)
	private Collection<Profile> profiles;

	@JsonIgnore
	@OneToMany(mappedBy="projet")
	private Collection<Pourcentage>pourcentages;

	public Projet() {
		super();
	}

	

	
	

	
}
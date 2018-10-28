package com.example.exp.entities;

import java.io.Serializable;
import java.util.Collection;
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
public class Profile implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer Id;
	private String nompro;
	
	
	@ManyToMany
	private Collection<Technologie> Technologies;
	
	@JsonIgnore
	@ManyToMany(mappedBy="profiles")
	private Collection<Projet> project;
	
	@ManyToOne
	private Niveau niveaux;
	@JsonIgnore
	@OneToMany(mappedBy="profile")
	private List<Pourcentage>pourcentages;
	
	public Profile() {
		super();
	}
	
	
	
	
	
	
}

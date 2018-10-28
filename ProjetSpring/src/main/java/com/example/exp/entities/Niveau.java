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
public class Niveau implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer id;
	private String nom;
	
	 @JsonIgnore
	@OneToMany(mappedBy="niveaux")
	private Collection<Profile> profiles;

	public Niveau() {
		super();
	}


	
}

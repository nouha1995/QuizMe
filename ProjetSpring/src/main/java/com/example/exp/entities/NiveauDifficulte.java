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
public class NiveauDifficulte implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private int niveau;
	
	@JsonIgnore
	@OneToMany(mappedBy ="niveauDiff")
	private List<Question> questions;

	public NiveauDifficulte() {
		super();
	}
	
	
}

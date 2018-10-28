package com.example.exp.entities;


import java.io.Serializable;

import javax.persistence.*;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@EqualsAndHashCode
@Entity
public class SousChapitre implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer Id;
	private String nom;
	private String prcntg;
	@ManyToOne
	private Chapitre chapitres;

	public SousChapitre() {
		super();
	}
	
}

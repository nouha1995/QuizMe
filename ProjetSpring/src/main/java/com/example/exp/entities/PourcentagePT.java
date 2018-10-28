package com.example.exp.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class PourcentagePT implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int idProjet;
	private int idProfile;
	private int idTechnologie;
	
	

}

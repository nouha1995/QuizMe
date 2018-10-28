package com.example.exp.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Pourcentage implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="idProjet",referencedColumnName="id",insertable=false,updatable=false)
	private Projet projet;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="idProfile",referencedColumnName="id",insertable=false,updatable=false)
	private Profile profile;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="idTechnologie",referencedColumnName="id",insertable=false,updatable=false)
	private Technologie technologie;
	@EmbeddedId
	@JsonIgnore
	private PourcentagePT pourcentagePt;
	private int prcntg;
		
	

	

}

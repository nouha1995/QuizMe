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
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="poste")

public class Personne implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private Integer id;
	private String Login;
	private String Pwd;
	private String mail;
	public Personne() {
		super();
	}
	
	
}

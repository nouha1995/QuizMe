package com.example.exp.entities;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@DiscriminatorValue(value="ADMIN")

public class Admin extends Personne {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}

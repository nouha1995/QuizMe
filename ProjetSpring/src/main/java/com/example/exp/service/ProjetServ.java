package com.example.exp.service;

import java.util.Collection;


import com.example.exp.entities.Projet;



public interface ProjetServ {

Collection<Projet> getAllProjets();
	
	//Optional<Projet>getProjetById(Long id);
	
//	Projet createProjet(Projet place);
	
//	Projet updateProjet(Projet place); void deleteProjet(Long id);
	
	Projet getProjetBynomprof(String nom);

}

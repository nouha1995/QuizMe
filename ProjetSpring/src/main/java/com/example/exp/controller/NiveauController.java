package com.example.exp.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exp.Repo.NiveauRepository;
import com.example.exp.entities.Niveau;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="/niveaux")
public class NiveauController {

	 @Autowired
	    private NiveauRepository niveauRepository;

	    
	    @RequestMapping(method = RequestMethod.GET)
	    public Collection<Niveau> getAllNiveau() {
	                   return this.niveauRepository.findAll();
	    }
}

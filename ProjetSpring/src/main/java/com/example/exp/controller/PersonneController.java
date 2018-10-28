package com.example.exp.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exp.Repo.CandidatRepository;
import com.example.exp.entities.Candidat;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value ="/candidats")
public class PersonneController {

	@Autowired 
	private CandidatRepository candidatRepository;
	
	 @RequestMapping(method = RequestMethod.GET)
	    public List<Candidat> getAllCandidat() {
		 List<Candidat> list=this.candidatRepository.findAll().stream().collect(Collectors.toList());
	                   return list;
	    }
	
	@RequestMapping(value = "/{mail}", method = RequestMethod.GET)
    public List<Candidat> getCandidatBymail(@PathVariable(value = "mail") String mail) {
        //find projet by nom
         return this.candidatRepository.findByMail(mail);
         }
	
	@RequestMapping(method = RequestMethod.POST , value="/add")
	public Candidat creerDemande(@RequestBody Candidat candidat){
		Candidat _candidat = candidatRepository.save(candidat);
		return _candidat;
	}

}

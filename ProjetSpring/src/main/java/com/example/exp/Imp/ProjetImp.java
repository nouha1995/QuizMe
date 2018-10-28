package com.example.exp.Imp;

import java.util.Collection;
import java.util.Optional;

import javax.annotation.Resource;

import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exp.Repo.ProfileRepository;
import com.example.exp.Repo.ProjetRepository;
import com.example.exp.entities.Profile;
import com.example.exp.entities.Projet;
import com.example.exp.service.ProjetServ;

@Service(value = "projetService")
public class ProjetImp implements ProjetServ {
	@Resource
	private ProjetRepository Repo;
	@Autowired
	private ProfileRepository rep;

	@Override
	public Collection<Projet> getAllProjets() {
		return IteratorUtils.toList(this.Repo.findAll().iterator());
	}

	@Override
	public Projet getProjetBynomprof(String nom){
		Profile p=new Profile();
		return this.Repo.findBynom(nom);
		
	}

//	@Override
//	public Optional<Projet> getProjetById(Long id) {
	//	return this.Repo.findById(id);
//	}

	//@Override
	//public Projet createProjet(Projet place) {
	//	return this.Repo.save(place);
	//}

	//@Override
	//public Projet updateProjet(Projet place) {
	//	return this.Repo.save(place);
	//}

	//@Override
	//public void deleteProjet(Long id) {
	//	this.Repo.deleteById(id);
		
	//}

//	@Override
//	public Projet getProjetBynom(String nom) {
//		return this.Repo.findBynom(nom);
//	
//	}
	
	
	
}

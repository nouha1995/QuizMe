package com.example.exp.Repo;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.exp.entities.Projet;
@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface ProjetRepository extends JpaRepository<Projet, Integer>{

	
        Projet findBynom(String nom);
        List<Projet> findByNomAndProfiles_nompro(String nom, String nompro);
        List<Projet> findByNom(String nom);
        




}

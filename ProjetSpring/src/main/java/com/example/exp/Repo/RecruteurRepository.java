package com.example.exp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.exp.entities.Recruteur;
@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface RecruteurRepository extends JpaRepository<Recruteur, Integer>{

}

package com.example.exp.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exp.entities.Technologie;



public interface MatiereRepository extends JpaRepository<Technologie, Integer> {
	List<Technologie> findBynom(String nom);

}

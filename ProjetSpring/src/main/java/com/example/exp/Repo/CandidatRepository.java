package com.example.exp.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exp.entities.Candidat;

public interface CandidatRepository extends JpaRepository<Candidat, Integer>{

	List<Candidat> findByMail(String mail);
}

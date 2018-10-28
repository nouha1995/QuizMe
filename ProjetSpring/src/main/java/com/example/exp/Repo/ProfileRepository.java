package com.example.exp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exp.entities.Profile;




public interface ProfileRepository extends JpaRepository<Profile, Integer>{
	Profile findBynompro(String nompro);
}

package com.example.exp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.exp.entities.Question;

public interface QuestionRepository extends JpaRepository<Question	, Integer>{

}

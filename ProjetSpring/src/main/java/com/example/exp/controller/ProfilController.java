package com.example.exp.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exp.Repo.ProfileRepository;
import com.example.exp.entities.Profile;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="/profiles")
public class ProfilController {
	
	 @Autowired
	    private ProfileRepository profileRepository;


	 @RequestMapping(method = RequestMethod.GET)
	    public List<Profile> getAllProfile() {
		 List<Profile> list=this.profileRepository.findAll().stream().filter(distinctByKey(b -> b.getNompro())).collect(Collectors.toList());
	                   return list;
	    }
	 
	 
	 private static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
	        Map<Object,Boolean> seen = new ConcurrentHashMap<>();
	        return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
	    }
	 
	 
}
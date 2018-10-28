package com.example.exp.service;

import java.util.Collection;

import com.example.exp.entities.Profile;


public interface ProfileServ {
	
Collection<Profile> getAllProfiles();
	
	//Optional<Profile>getProfiletById(Long id);
	
//	Profile createProjet(Profile profile);
	
//	Profile updateProfile(Profile profile); void deleteProfile(Long id);
	
Profile getProfileBynompro(String nompro);

}

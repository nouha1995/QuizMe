package com.example.exp.Imp;

import java.util.Collection;

import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exp.Repo.ProfileRepository;
import com.example.exp.entities.Profile;
import com.example.exp.service.ProfileServ;

@Service
public class ProfileImp implements ProfileServ {
	@Autowired
	private ProfileRepository Repo;

	@Override
	public Collection<Profile> getAllProfiles() {
		return IteratorUtils.toList(this.Repo.findAll().iterator());
	}

	@Override
	public Profile getProfileBynompro(String nompro) {
		return this.Repo.findBynompro(nompro);
	}
	

}

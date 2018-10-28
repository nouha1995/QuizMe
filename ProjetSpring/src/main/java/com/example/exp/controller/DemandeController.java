package com.example.exp.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exp.Repo.CandidatRepository;
import com.example.exp.Repo.DemandeRepository;
import com.example.exp.Repo.ProjetRepository;
import com.example.exp.Repo.RecruteurRepository;
import com.example.exp.entities.Candidat;
import com.example.exp.entities.Demande;
import com.example.exp.entities.Projet;
import com.example.exp.entities.Recruteur;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value ="/demandes")
public class DemandeController {

	@Autowired
	private DemandeRepository demandeRepository;
	@Autowired
	private ProjetRepository projetRepository;
	@Autowired
	private RecruteurRepository recruteurRepository;
	@Autowired
	private CandidatRepository candidatRepository;
	Logger logger = LoggerFactory.getLogger(DemandeController.class);
	
	@RequestMapping(method = RequestMethod.POST , value="/add/{idProjet}/{idRecruteur}")
	public Demande creerDemande(@RequestBody Demande demande,@PathVariable("idProjet") Integer idProjet,@PathVariable("idRecruteur") Integer idRecruteur){
		Optional<Projet> projet=projetRepository.findById(idProjet);
		demande.setProjets(projet.get());
		Optional<Recruteur> recruteur=recruteurRepository.findById(idRecruteur);
		demande.setRecruteurs(recruteur.get());
		Demande _demande=demandeRepository.save(demande);
		return _demande;
	}
	
	@RequestMapping(method = RequestMethod.PUT , value="/update/{idDemande}/{idCandidat}" )
	public Demande affecterCandidatsADemande(@PathVariable("idDemande") Integer idDemande,@PathVariable("idCandidat") Integer idCandidat) {
	    Demande demande=demandeRepository.findById(idDemande).get();
	    logger.info("iddemande:"+idDemande);
		logger.info("idCadidat:"+idCandidat);

	    Candidat candidat=candidatRepository.findById(idCandidat).get();
		logger.info("demande:"+demande);
		logger.info("Cadidat:"+candidat);
		demande.getCandidats().add(candidat);
		demandeRepository.save(demande);
	   return demande;
	}
	
	@RequestMapping(value = "/{titre}", method = RequestMethod.GET)
    public Demande getProjetById(@PathVariable(value = "titre") String titre) {
                  //find projet by nom
                   return this.demandeRepository.findByTitre(titre);
                   } 
}

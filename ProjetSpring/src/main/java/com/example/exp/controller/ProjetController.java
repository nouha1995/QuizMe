package com.example.exp.controller;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exp.Repo.ProjetRepository;
import com.example.exp.entities.Profile;
import com.example.exp.entities.Projet;
import com.example.exp.entities.Question;
import com.example.exp.entities.Technologie;
import com.example.exp.service.ProjetServ;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value ="/projets")
public class ProjetController {

	@Autowired
    private ProjetServ serv;

    @Autowired
    private ProjetRepository projetRepository;

    
    @RequestMapping(method = RequestMethod.GET)
    public Collection<Projet> getAllProjet() {
                   return this.serv.getAllProjets();
    }

  
    
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Projet getProjetById(@PathVariable(value = "id") Integer id) {
                  //find projet by nom
                   return this.projetRepository.findById(id).get();
                   } 
    
    
    @RequestMapping(value="{nomProj}/{nomProf}",method=RequestMethod.GET)
public List<Projet> addWrapperToGet(@PathVariable("nomProj") String nomProjet,@PathVariable("nomProf") String profil){

List<Projet> list=projetRepository.findByNom(nomProjet);
for(Projet p: list){

List<Profile> result = p.getProfiles().stream()                // convert list to stream
        .filter(t->t.getNompro().equals(profil))    
        .collect(Collectors.toList());  
p.setProfiles(result);
}
return list;
}
   
    
  @RequestMapping(value="{nomProj}/{nomProf}/{nomNiveau}",method=RequestMethod.GET)
public List<Projet> ToGetquestions(@PathVariable("nomProj") String nomProjet,@PathVariable("nomProf") String profil,@PathVariable("nomNiveau") String niveau){
            
      List<Projet> list=projetRepository.findByNom(nomProjet);
      for(Projet projet: list){

        List<Profile> result = projet.getProfiles().stream()                // convert list to stream
                .filter(t->t.getNompro().equals(profil) && t.getNiveaux().getNom().equals(niveau))     
                .collect(Collectors.toList());  
        projet.setProfiles(result);
                   
       for(Profile profile: projet.getProfiles()){             
                 
                 for(Technologie tech:profile.getTechnologies()){
                        
                        if(profile.getNiveaux().getNom().equals("senior")){
                        
                  List<Question> question = tech.getQuestions().stream()                // convert list to stream
                       .filter(t-> t.getNiveauDiff().getNiveau()==3 )     
                       .collect(Collectors.toList());  
            tech.setQuestions(question);
             
                        }     
                        else
                               if(profile.getNiveaux().getNom().equals("junior")){
                               
                               List<Question> question = tech.getQuestions().stream()                // convert list to stream
                                  .filter(t-> t.getNiveauDiff().getNiveau()==2 )     
                                  .collect(Collectors.toList());  
                       tech.setQuestions(question);
                
          }
                 }
          
          
        }
      
                
      }
      return list;
 }

    
    
    
    
//    @RequestMapping(value="{nomProj}/{nomProf}/{nomNiveau}",method=RequestMethod.GET)
//public List<Projet> addWrapperToGetniv(@PathVariable("nomProj") String nomProjet,@PathVariable("nomProf") String profil,@PathVariable("nomNiveau") String niveau){
//
//List<Projet> list=projetRepository.findByNom(nomProjet);
//for(Projet p: list){
//
//List<Profile> result = p.getProfiles().stream()                // convert list to stream
//        .filter(t->t.getNompro().equals(profil) && t.getNiveaux().getNom().equals(niveau))     
//        .collect(Collectors.toList());  
//p.setProfiles(result);
//        
//}
//return list;
//}
//    
    

    

////@RequestMapping(value="{nomProj}/{nomNiveau}",method=RequestMethod.GET)
////public List<Projet> ToGetniv(@PathVariable("nomProj") String nomProjet,@PathVariable("nomNiveau") String niveau){
////
//////return projetRepository.findByNomProjetAndTests_profil(nomProjet, profil);/,@PathVariable("profil") String profil=>in parameter
////List<Projet> list=projetRepository.findByNom(nomProjet);
////for(Projet p: list){
////
////List<Profile> result = p.getProfiles().stream()                // convert list to stream
////        .filter(t->t.getNiveaux().equals(niveau))     
////        .collect(Collectors.toList());  
////p.setProfiles(result);
////        
////}
////return list;

	
}

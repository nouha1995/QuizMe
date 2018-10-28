import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProjectService} from '../services/project.service';
import {SelectItem} from 'primeng/api';
import {Project} from '../modules/project';
import {Profil} from '../modules/profil';
import {Niveau} from '../modules/niveau';
import {ProfilService} from '../services/profil.service';
import {NiveauService} from '../services/niveau.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Observable<any>;
  project: Array<any>;
  projectData: Array<any>;
  list_project: SelectItem[];
  list_profil: SelectItem[];
  list_niveau: SelectItem[];
  project_index: string ;
  profil_index: string;
  niveau_index: string;
  constructor(private projectService: ProjectService, private profilService: ProfilService,
              private niveauService: NiveauService) {
    this.reloadData();
  }

  ngOnInit() {
    this.reloadData();
  }
  //
  //
  private reloadData() {
    this.projectService.getAllProjet()
      .subscribe(data => {
        this.projects = data;
         this.project = this.projects[0]['profiles'];
         //
        this.list_project = [];
        for (let i = 0; i < data.valueOf().length; i++) {
         /* this.list_project.push({label: data[i].nom,
            value: {id: data[i].id, name: data[i].nom, code: null}});*/
          this.list_project.push({label: data[i].nom,
            value: data[i].nom});
        }
      });
    //
    this.profilService.getAllProfil()
      .subscribe(data => {
        //
        this.list_profil = [];
        for (let i = 0; i < data.valueOf().length; i++) {
          /*this.list_profil.push({label: data[i].nompro,
            value: {id: data[i].id, name: data[i].nompro, code: null}});*/
          this.list_profil.push({label: data[i].nompro,
            value: data[i].nompro});
        }
      });
    //
    this.niveauService.getAllNiveau()
      .subscribe(data => {
        //
        this.list_niveau = [];
        for (let i = 0; i < data.valueOf().length; i++) {
        /*  this.list_niveau.push({label: data[i].nom,
            value: {id: data[i].id, name: data[i].nom, code: null}});*/
          this.list_niveau.push({label: data[i].nom,
            value: data[i].nom});
        }
      });
  }
//
  onSubmit(project: string, profil: string, seniorité: string) {
   this.projectService.getBy_projet_seniorite_profil(project, profil, seniorité)
     .subscribe(data => {
       this.projectData = data;
     });

  }
}

import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {SelectItem} from 'primeng/api';
import {ProfilService} from '../../services/profil.service';
import {NiveauService} from '../../services/niveau.service';
import {Observable} from 'rxjs';
import {Demande} from '../../modules/demande';
import {DemandeService} from '../../services/demande.service';
import {Project} from '../../modules/project';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  // providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading = false;

  public AnimationBarOption;

  projects: Observable<any>;
  project: Array<any>;
  profil: Array<any>;
  technologies: Array<any>;
  projectData: Observable<any>;
  list_project: SelectItem[];
  list_profil: SelectItem[];
  list_niveau: SelectItem[];
  list_project_select: Array<any>;
  list_profil_select: Array<any>;
  list_niveau_select: Array<any>;
  project_index: string;
  profil_index: string;
  niveau_index: string;
  idProjet: number;
  displayDialog: boolean;
  selectedTech: string;
  projetIndex: Array<any>;
  idDemandeCourant: number;
  demande: Demande = new Demande();

  //
  ///
  //
  //
  //
  constructor(private projectService: ProjectService, private profilService: ProfilService,
              private niveauService: NiveauService, private demandeService: DemandeService, private router: Router,
              private route: ActivatedRoute) {
    this.reloadData();
  }

  ngOnInit() {

    // this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
  //
  selectProject() {
    this.projectService.getById(this.idProjet).subscribe(data => {
      this.project_index = data['nom'] + '';
    });
    console.log( this.project_index);

  }

  addDemande() {
    console.log('creation de demande');
    this.projectService.getById(this.idProjet).subscribe(data => {
      this.project_index = data['nom'] + '';
      console.log( this.project_index);

    });

    this.demandeService.addDemande(this.demande, this.idProjet, 1).subscribe(
      data => {

        console.log( this.project_index);
        console.log(data);
        this.idDemandeCourant = data['id'];
        console.log('index : id demande courant' +  this.idDemandeCourant);
        this.router.navigate(['candidats',
          {project_index: this.project_index, profil_index: this.profil_index
            , niveau_index: this.niveau_index, idDemandeCourant: this.idDemandeCourant}], { relativeTo: this.route });
      }
      , error => console.log(error));
    this.demande = new Demande();
    console.log('index : nrmalemen its done');

  }
  //
  selectTech(event: Event, tech: string) {
    this.selectedTech = tech;
    this.displayDialog = true;
    event.preventDefault();
  }
  onDialogHide() {
    this.selectedTech = null;
  }
  private reloadData() {
    this.projectService.getAllProjet()
      .subscribe(data => {
        this.projects = data;
        this.list_project_select = data;
        this.project = this.projects[0]['profiles'];
      });
    //
    this.profilService.getAllProfil()
      .subscribe(data => {
        this.list_profil_select = data;
      });
    //
    this.niveauService.getAllNiveau()
      .subscribe(data => {
        this.list_niveau_select = data;
      });
  }
//
  onSubmit( profil: string, seniorite: string) {
    console.log(this.idProjet);
    this.projectService.getById(this.idProjet).subscribe(data => {
      this.projetIndex = data;
      this.project_index = this.projetIndex['nom'] + '';
      console.log(  this.project_index);

      console.log( this.project_index);

      console.log(this.project_index + ' ' + profil + ' ' + seniorite);
      this.projectService.getBy_projet_seniorite_profil(this.project_index, profil, seniorite)
        .subscribe(data1 => {
          console.log('coucou');
          // console.log(data[0]['id']);
          this.projectData = data1;
          this.profil = this.projectData[0]['profiles'];
          this.technologies = this.profil[0]['technologies'];
        });
    });
  }
}

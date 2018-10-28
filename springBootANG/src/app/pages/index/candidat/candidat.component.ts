import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PersonneService} from '../../../services/personne.service';
import {Candt} from '../../../modules/candt';
import {DemandeService} from '../../../services/demande.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent implements OnInit {

  project_index: string;
  profil_index: string;
  niveau_index: string;
  private sub: any;
  private sub2: any;
  candidatFilter: any = { mail: '' };
  candidats: Array<any>;
  selectedCandidat: Array<any> = [];
  addedCandidat: Candt = new Candt();
  idDemandeCourant: number;

  //
  //
  constructor(private route: ActivatedRoute, private router: Router, private candidatService: PersonneService,
              private demandeService: DemandeService, private personneService: PersonneService) { }

  ngOnInit() {
    this.getAllCanidats();
    this.sub = this.route.params.subscribe(params => {
      this.project_index = params['project_index'];
      this.profil_index = params['profil_index'];
      this.niveau_index = params['niveau_index'];
      this.idDemandeCourant = +params['idDemandeCourant'];
      console.log('candidat : id demande courant' +  this.idDemandeCourant + params['idDemandeCourant']);
      console.log('candidat : profil_index' + this.profil_index);

    });
    this.project_index = this.route.snapshot.paramMap.get('project_index');
    this.profil_index = this.route.snapshot.paramMap.get('profil_index');
    this.niveau_index = this.route.snapshot.paramMap.get('niveau_index');
    this.idDemandeCourant = +this.route.snapshot.paramMap.get('idDemandeCourant');
    console.log('candidat : id demande courant' +  this.idDemandeCourant);
    console.log('candidat : profil_index' + this.profil_index);
  }
  //

  //
  addCandidat() {
    this.addedCandidat.status = 'intern';
    this.addedCandidat.pwd = 'sofrecom';
    this.selectedCandidat.push(this.addedCandidat);
    console.log('candidat : candidat selectionné' + this.selectedCandidat[this.selectedCandidat.length - 1].mail +
      'candidat selectionné: ' + this.selectedCandidat[this.selectedCandidat.length - 1].id);
    this.candidatService.addCandidat(this.addedCandidat).subscribe(data => { console.log(data);
        let id;
        id = + data['id'];
        this.demandeService.affecterCandidatADemande(this.idDemandeCourant, id, '')
          .subscribe(data2 => console.log('data' + data2), error2 => console.log(error2)); }
      , error => console.log(error));

    this.addedCandidat = new Candt();
    this.getAllCanidats();
  }
  //
  selectCandidat(candidat: Object) {
    let c = new Candt();
    c = <Candt>candidat;
    console.log('test c: ' + c.status);
    if (c.status === 'intern') {alert('candidat déja affecté'); } else {
      this.selectedCandidat.push(candidat);
      console.log('index : id demande courant' +  this.idDemandeCourant);
      this.demandeService.affecterCandidatADemande(this.idDemandeCourant, this.selectedCandidat[this.selectedCandidat.length - 1].id, '')
        .subscribe(data => console.log('data' + data), error => console.log(error));
      this.personneService.modifierStatus(this.selectedCandidat[this.selectedCandidat.length - 1].id, 'intern', '')
        .subscribe(data => console.log('data' + data), error => console.log(error));
      console.log('candidat : candidat selectionné' + this.selectedCandidat[this.selectedCandidat.length - 1].mail +
        'candidat selectionné: ' + this.selectedCandidat[this.selectedCandidat.length - 1].id);

    }
    this.getAllCanidats();
  }
  //
  getAllCanidats() {
    this.candidatService.getAllCandidats().subscribe(data => {
      this.candidats = data ;
      console.log('loading candidats...' + data);
    });
  }
  //
  goToSiblingQuestionComponent() {
    this.router.navigate(['quests'], { relativeTo: this.route });
    console.log('it work');
    // , { project_index: this.project_index
    //       , profil_index: this.profil_index, niveau_index: this.niveau_index }
  }

  showDropdown() {
    let div, a, i;
    div = document.getElementById('myDropdown');
    a = div.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {

      a[i].style.display = 'block';

    }
  }
  hideDropdown() {
    let div, a, i;
    div = document.getElementById('myDropdown');
    a = div.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {

      a[i].style.display = 'none';

    }
  }
}

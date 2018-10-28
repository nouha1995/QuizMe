import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Question} from '../../../modules/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  project_index: string ;
  profil_index: string;
  niveau_index: string;
  reponses: Array<number> = [];
  questions: Array<any>;
  technologies: Array<any>;
  profil: Array<any>;
  projectData: Observable<any>;
  private sub: any;
  slideIndex = 1;
  question_choisie: string;
  index_n: number;
  point_accumule: number;
  radio: string;
  result_index: number;
  somme_result = 0;
  //
//
  constructor(private route: ActivatedRoute,
              private projectService: ProjectService) {
    // this.showSlides(this.slideIndex);
  }

  ngOnInit() {
this.point_accumule = 0;
   this.sub = this.route.params.subscribe(params => {
     this.project_index = params['project_index'];
     this.profil_index = params['profil_index'];
     this.niveau_index = params['niveau_index'];
   });
    this.questionsOn();
   this.showSlides(this.slideIndex);
  }
 //
  questionsOn() {
    this.projectService.getBy_projet_seniorite_profil(this.project_index ,  this.profil_index, this.niveau_index)
      .subscribe(data => {
        console.log('quests');
        console.log(this.project_index + this.profil_index + this.niveau_index);
        this.projectData = data;
        this.profil = this.projectData[0]['profiles'];
        this.technologies = this.profil[0]['technologies'];
        this.questions = this.technologies[0]['questions'];
      });
  }
  showSlides(n) {
    let i;
    let slides;
    let dots;
    slides = document.getElementsByClassName('mySlides');
    console.log('slides' + slides.length);
    dots = document.getElementsByClassName('dot');
    if (n > slides.length) {this.slideIndex = 1; }
    if (n < 1) {this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
 //   slides[this.slideIndex - 1].style.display = 'block';
    slides[this.slideIndex - 1].style.display = 'block';
    console.log('classname' +  dots[this.slideIndex - 1].className);
    dots[this.slideIndex - 1].className += ' active';
  }
  //
//
  //
  calculResultat(index) {
    console.log('reponse choisie ' + this.question_choisie);
    if (this.question_choisie === this.questions[index]['reponse']) {
      this.point_accumule = 1;
      console.log( 'point:' + this.point_accumule);
       this.reponses[index] = this.point_accumule;
      console.log( 'repone' + index + this.reponses[index]);
    } else {
        this.point_accumule = 0;
        this.reponses[index] = this.point_accumule;
        console.log( 'repone' + index + this.reponses[index]);
    }
  }
   plusSlides(n) {
     this.somme_result = 0;
    this.showSlides(this.slideIndex += n);
    for (let i = 0 ;  i < this.reponses.length ; i++) {
              this.somme_result += this.reponses[i];
    }
    //
  }
   currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
   //
}

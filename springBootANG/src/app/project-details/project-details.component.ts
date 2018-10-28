import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ProjectListComponent} from '../project-list/project-list.component';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
// @Input() projet: Project;

  constructor(private projetService: ProjectService, private listProject: ProjectListComponent) { }

  ngOnInit() {
  }

}

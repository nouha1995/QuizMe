import { Routes, RouterModule } from '@angular/router';
import {CreateProjectComponent} from './create-project.component';

const childRoutes: Routes = [
  {
    path: 'create-project',
    component: CreateProjectComponent
  }
];

export const createProjectrouting = RouterModule.forChild(childRoutes);

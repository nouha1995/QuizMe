import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import {QuestionsComponent} from './questions/questions.component';
import {CandidatComponent} from './candidat/candidat.component';
import {DemandeComponent} from './demande/demande.component';


const childRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'quests/:project_index/:profil_index/:niveau_index',
    // path: 'quests',
    component: QuestionsComponent
  },
  {
    path: 'quests',
    // path: 'quests',
    component: QuestionsComponent
  },
  {
    path: 'demande',
    // path: 'quests',
    component: DemandeComponent
  },
  {
    path: 'candidats',
    component: CandidatComponent,
  },
  {
    path: 'child',

    children: [
      {
        path: 'quests1',
        component: QuestionsComponent,
      }/*,
      {
        path: 'candidats/:project_index/:profil_index/:niveau_index/:idDemandeCourant',
        component: CandidatComponent,
      }*/
    ]
  },
];

export const routing = RouterModule.forChild(childRoutes);
export const routingComponents = [QuestionsComponent, CandidatComponent];

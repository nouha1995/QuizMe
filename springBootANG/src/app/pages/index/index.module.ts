import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {routing, routingComponents} from './index.routing';
import {ProjectListComponent} from '../../project-list/project-list.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {AccordionModule, CodeHighlighterModule, TabViewModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {DataViewModule} from 'primeng/dataview';
import {RouterModule} from '@angular/router';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {QuestionsComponent} from './questions/questions.component';
import { CandidatComponent } from './candidat/candidat.component';
import { DemandeComponent } from './demande/demande.component';
import {FilterPipeModule} from 'ngx-filter-pipe';

@NgModule({
    imports: [
        CommonModule,
      FormsModule,
      // BrowserAnimationsModule,
      AccordionModule,
      HttpClientModule,
      InputTextModule,
      DialogModule,
     // DropdownModule,
      ButtonModule,
      PanelModule,
      DataViewModule,
      SharedModule,
      RouterModule,
         routing,
      CodeHighlighterModule,
      TabViewModule,
      SharedModule,
      NgbModule.forRoot(),
      FilterPipeModule
    ],
    declarations: [
        IndexComponent,
      ProjectListComponent,
      QuestionsComponent,
      CandidatComponent,
      DemandeComponent,

    ],
  exports: [
    IndexComponent,
    ProjectListComponent,
    QuestionsComponent,
    DemandeComponent
    ],
})
export class IndexModule { }

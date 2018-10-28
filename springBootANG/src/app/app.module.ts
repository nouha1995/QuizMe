
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routing} from './app.routing';
import {createProjectrouting} from './create-project/create-project.routing';

import {PagesModule} from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
   // CreateProjectComponent,
   // ProjectDetailsComponent,
    // ProjectListComponent,
   // SearchProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   // LayoutModule,
   // InputTextModule,
  //  ButtonModule,
   // DropdownModule,
    BrowserAnimationsModule,
   // AccordionModule,
   // CommonModule,
    routing,
    createProjectrouting,
    PagesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

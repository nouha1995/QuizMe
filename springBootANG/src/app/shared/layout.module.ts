import { NgModule } from '@angular/core';
import { PagesTopComponent } from './layouts/pages-top/pages-top.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MenuComponent} from './layouts/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    AccordionModule,
  ],
  providers: [
  ],
  declarations: [
    PagesTopComponent,
    SidebarComponent,
    MenuComponent
  ],
  exports: [
    PagesTopComponent,
    SidebarComponent,
     MenuComponent,
  ]
})
export class LayoutModule {
}

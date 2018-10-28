import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JsonpModule } from '@angular/http';

/* components */
import { CardComponent } from './components/card/card.component';
import {FileTreeComponent} from './components/file-tree/file-tree.component';
import {TodolistComponent} from './components/todolist/todolist.component';
import {TabsetComponent} from './components/tabset/tabset.component';
import {TabContentComponent} from './components/tabset/tab-content/tab-content.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {SwitchComponent} from './components/switch/switch.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    JsonpModule,
  ],
  declarations: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    ProfileComponent
  ],
  exports: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    ProfileComponent
  ]
})
export class SharedModule { }

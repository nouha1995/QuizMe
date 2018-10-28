import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';

/* components */
import { PagesComponent } from './pages.component';
import {CreateProjectComponent} from '../create-project/create-project.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
    ],
    declarations: [
        PagesComponent,
      CreateProjectComponent,
    ],
})
export class PagesModule { }

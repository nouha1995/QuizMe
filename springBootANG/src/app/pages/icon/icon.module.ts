import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './icon.routing';
import { IconComponent } from './icon.component';

@NgModule({
    imports: [
        CommonModule,
     //   SharedModule,
        routing
    ],
    declarations: [
        IconComponent
    ]
})
export class IconModule {
}

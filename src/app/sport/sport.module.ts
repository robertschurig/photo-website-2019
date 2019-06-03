import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { SportComponent } from './sport.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SportRoutingModule
  ],
  declarations: [ SportComponent, DetailComponent ]
})
export class SportModule {
}

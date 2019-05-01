import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { SportComponent } from './sport.component';
import { SharedModule } from '../shared/shared.module';
import { LatestComponent } from './latest/latest.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SportRoutingModule
  ],
  declarations: [ SportComponent, LatestComponent ]
})
export class SportModule {
}

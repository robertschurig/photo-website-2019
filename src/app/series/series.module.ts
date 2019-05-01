import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { ColorGelComponent } from './color-gel/color-gel.component';
import { SharedModule } from '../shared/shared.module';
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SeriesRoutingModule
  ],
  declarations: [ ColorGelComponent, SeriesComponent ]
})
export class SeriesModule {
}

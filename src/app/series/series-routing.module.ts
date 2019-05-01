import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorGelComponent } from './color-gel/color-gel.component';
import { SeriesComponent } from './series.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesComponent,
    children: [
      {
        path: '',
        redirectTo: 'color-gel',
      },
      {
        path: 'color-gel',
        component: ColorGelComponent,
      },
    ],
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SeriesRoutingModule {
}

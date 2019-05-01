import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportComponent } from './sport.component';
import { LatestComponent } from './latest/latest.component';

const routes: Routes = [
  {
    path: '',
    component: SportComponent,
    children: [
      {
        path: '',
        redirectTo: 'istaf-2016',
      },
      {
        path: 'istaf-2016',
        component: LatestComponent,
      },
    ],
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SportRoutingModule {
}

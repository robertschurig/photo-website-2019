import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportComponent } from './sport.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: SportComponent,
    children: [
      {
        path: '',
        redirectTo: 'athletics',
      },
      {
        path: ':id',
        component: DetailComponent,
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortraitComponent } from './portrait.component';

const routes: Routes = [
  {
    path: '',
    component: PortraitComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PortraitRoutingModule {
}

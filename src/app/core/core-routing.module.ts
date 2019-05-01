import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'portrait',
    loadChildren: './../portrait/portrait.module#PortraitModule',
  },
  {
    path: 'series',
    loadChildren: './../series/series.module#SeriesModule',
  },
  {
    path: 'contact',
    loadChildren: './../contact/contact.module#ContactModule',
  },
  {
    path: 'sport',
    loadChildren: './../sport/sport.module#SportModule',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {
}

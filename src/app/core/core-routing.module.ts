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
    loadChildren: () => import('./../portrait/portrait.module').then(m => m.PortraitModule),
  },
  {
    path: 'series',
    loadChildren: () => import('./../series/series.module').then(m => m.SeriesModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./../contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'sport',
    loadChildren: () => import('./../sport/sport.module').then(m => m.SportModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {
}

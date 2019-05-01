import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    AppComponent
  ],
  exports: [
    AppComponent,
  ]
})

export class CoreModule {
}

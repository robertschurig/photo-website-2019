import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgGridComponent } from './components/img-grid/img-grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  declarations: [ ImgGridComponent ],
  exports: [ ImgGridComponent, CommonModule ]
})
export class SharedModule {
}

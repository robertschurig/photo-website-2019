import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgGridComponent } from './components/img-grid/img-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgModalComponent } from './components/img-modal/img-modal.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  declarations: [ ImgGridComponent, ImgModalComponent ],
  exports: [ ImgGridComponent, CommonModule, ImgModalComponent ]
})
export class SharedModule {
}

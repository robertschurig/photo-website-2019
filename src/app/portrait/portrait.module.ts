import { NgModule } from '@angular/core';

import { PortraitRoutingModule } from './portrait-routing.module';
import { PortraitComponent } from './portrait.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PortraitRoutingModule
  ],
  declarations: [ PortraitComponent ]
})
export class PortraitModule {
}

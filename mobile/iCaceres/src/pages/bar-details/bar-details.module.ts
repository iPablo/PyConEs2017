import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarDetailsPage } from './bar-details';

@NgModule({
  declarations: [
    BarDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BarDetailsPage),
  ],
})
export class BarDetailsPageModule {
}

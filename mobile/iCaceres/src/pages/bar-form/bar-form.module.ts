import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarFormPage } from './bar-form';

@NgModule({
  declarations: [
    BarFormPage,
  ],
  imports: [
    IonicPageModule.forChild(BarFormPage),
  ],
})
export class BarFormPageModule {
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarsPage } from './bars';
import { BarsProvider } from './bars.provider';

@NgModule({
  declarations: [
    BarsPage,
  ],
  imports: [
    IonicPageModule.forChild(BarsPage),
  ],
  providers: [BarsProvider]
})
export class BarsPageModule {
}

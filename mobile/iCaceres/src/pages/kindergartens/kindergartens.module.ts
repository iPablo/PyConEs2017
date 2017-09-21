import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KindergartensPage } from './kindergartens';
import { KindergartensProvider } from './kindergartens.provider';

@NgModule({
  declarations: [
    KindergartensPage,
  ],
  imports: [
    IonicPageModule.forChild(KindergartensPage),
  ],
  providers: [KindergartensProvider]
})
export class KindergartensPageModule {
}

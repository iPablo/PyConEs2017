import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopsPage } from './shops';
import { ShopsProvider } from './shops.provider';

@NgModule({
  declarations: [
    ShopsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopsPage),
  ],
  providers: [ShopsProvider]
})
export class ShopsPageModule {
}

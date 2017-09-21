import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantsPage } from './restaurants';
import { RestaurantsProvider } from './restaurants.provider';

@NgModule({
  declarations: [
    RestaurantsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantsPage),
  ],
  providers: [RestaurantsProvider]
})
export class RestaurantsPageModule {
}

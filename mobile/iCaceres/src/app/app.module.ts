import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePageModule } from '../pages/home/home.module';
import { EventsPageModule } from '../pages/events/events.module';
import { RestaurantsPageModule } from '../pages/restaurants/restaurants.module';
import { BarsPageModule } from '../pages/bars/bars.module';
import { SchoolsPageModule } from '../pages/schools/schools.module';
import { ShopsPageModule } from '../pages/shops/shops.module';
import { KindergartensPageModule } from '../pages/kindergartens/kindergartens.module';
import { HttpModule } from '@angular/http';
import { BarFormPageModule } from '../pages/bar-form/bar-form.module';
import { BarDetailsPageModule } from '../pages/bar-details/bar-details.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HomePageModule,
    EventsPageModule,
    RestaurantsPageModule,
    BarsPageModule,
    SchoolsPageModule,
    ShopsPageModule,
    KindergartensPageModule,
    BarFormPageModule,
    BarDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

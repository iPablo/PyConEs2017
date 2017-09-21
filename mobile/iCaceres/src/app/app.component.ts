import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BarsPage } from '../pages/bars/bars';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { ShopsPage } from '../pages/shops/shops';
import { KindergartensPage } from '../pages/kindergartens/kindergartens';
import { SchoolsPage } from '../pages/schools/schools';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Bares', component: BarsPage },
      { title: 'Restaurantes', component: RestaurantsPage },
      { title: 'Tiendas', component: ShopsPage },
      { title: 'Guarderías', component: KindergartensPage },
      { title: 'Colegios', component: SchoolsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

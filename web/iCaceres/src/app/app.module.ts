import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarsComponent } from './bars/bars.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { KindergartensComponent } from './kindergartens/kindergartens.component';
import { SchoolsComponent } from './schools/schools.component';
import { ShopsComponent } from './shops/shops.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HttpModule } from '@angular/http';
import { BarsProvider } from './bars/bars.provider';
import { EventsProvider } from './events/events.provider';
import { KindergartensProvider } from './kindergartens/kindergartens.provider';
import { RestaurantsProvider } from './restaurants/restaurants.provider';
import { ShopsProvider } from './shops/shops.provider';
import { SchoolsProvider } from './schools/schools.provider';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'bars', component: BarsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'kindergartens', component: KindergartensComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'shops', component: ShopsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarsComponent,
    RestaurantsComponent,
    KindergartensComponent,
    SchoolsComponent,
    ShopsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    BarsProvider,
    EventsProvider,
    KindergartensProvider,
    RestaurantsProvider,
    SchoolsProvider,
    ShopsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

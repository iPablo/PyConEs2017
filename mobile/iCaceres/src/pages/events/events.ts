import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event } from './event';
import { EventsProvider } from './events.provider';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: Event[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eventsProvider: EventsProvider) {
  }

  ionViewDidLoad() {
    this.eventsProvider.getEvents().subscribe(events => this.events = events);
  }

}

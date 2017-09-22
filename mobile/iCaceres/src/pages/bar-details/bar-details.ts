import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarsProvider } from '../bars/bars.provider';
import { Bar } from '../bars/bar';

/**
 * Generated class for the BarDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bar-details',
  templateUrl: 'bar-details.html',
})
export class BarDetailsPage {

  bar: Bar = { name: '', address: '' };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barsProvider: BarsProvider) {
  }

  ionViewDidLoad() {
    this.barsProvider.getBar(this.navParams.get('barId')).subscribe(bar => this.bar = bar);
  }

}

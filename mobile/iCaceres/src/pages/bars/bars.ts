import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bar } from './bar';
import { BarsProvider } from './bars.provider';
import { BarFormPage } from '../bar-form/bar-form';

/**
 * Generated class for the BarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bars',
  templateUrl: 'bars.html',
})
export class BarsPage {

  bars: Bar[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barsProvider: BarsProvider) { }

  ionViewDidEnter() {
    this.barsProvider.getBars().subscribe(bars => this.bars = bars);
  }

  goToNewBar() {
    this.navCtrl.push(BarFormPage);
  }

}

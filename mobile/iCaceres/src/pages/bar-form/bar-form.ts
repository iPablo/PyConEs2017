import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BarsProvider } from '../bars/bars.provider';
import { Bar } from '../bars/bar';

/**
 * Generated class for the BarFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bar-form',
  templateUrl: 'bar-form.html',
})
export class BarFormPage {

  bar: Bar = {
    name: null,
    description: null,
    type: null,
    address: null,
    openingTime: null,
    closingTime: null
  };

  constructor(public navCtrl: NavController,
              private barsProvider: BarsProvider) {
  }

  ionViewDidLoad() { }

  saveBar() {
    this.barsProvider.saveBar(this.bar)
        .subscribe(() => this.navCtrl.pop());
  }

}

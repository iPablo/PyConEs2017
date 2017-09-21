import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shop } from './shop';
import { ShopsProvider } from './shops.provider';

/**
 * Generated class for the ShopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html',
})
export class ShopsPage {

  shops: Shop[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shopsProvider: ShopsProvider) {
  }

  ionViewDidLoad() {
    this.shopsProvider.getShops().subscribe(shops => this.shops = shops);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Kindergarten } from './kindergarten';
import { KindergartensProvider } from './kindergartens.provider';

/**
 * Generated class for the KindergartensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kindergartens',
  templateUrl: 'kindergartens.html',
})
export class KindergartensPage {

  kindergartens: Kindergarten[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private kindergartensProvider: KindergartensProvider) {
  }

  ionViewDidLoad() {
    this.kindergartensProvider.getKindergartens().subscribe(kindergartens => this.kindergartens = kindergartens);
  }

}

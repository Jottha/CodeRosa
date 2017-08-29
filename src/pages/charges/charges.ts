import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-charges',
  templateUrl: 'charges.html',
})
export class Charges {
  
  constructor(public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Charges');
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CodeRosa } from "../codeRosa/codeRosa";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  codes: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public af: AngularFire, 
    public navParams: NavParams,
    ) {
    this.codes = this.af.database.list('/Codes');
    console.log(this.codes);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

    pagina1() {
    this.navCtrl.push(CodeRosa);
    }
}

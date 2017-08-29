import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Curriculo } from '../curriculo/curriculo';

import { FirebaseListObservable } from 'angularfire2';

import { User } from './../../models/user.model';
import { UserProvider } from './../../providers/user/user';

@Component({
  selector: 'page-integrantes',
  templateUrl: 'integrantes.html',
})

export class Integrantes {

  users: FirebaseListObservable<User[]>;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider
    ) {
  }

  goToCurriculo(userID){
    this.navCtrl.push(Curriculo, { userID: userID });
  }

  ionViewDidLoad() {
    this.users = this.userProvider.users;
  }

}

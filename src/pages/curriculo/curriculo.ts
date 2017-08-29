import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2';
import { User } from './../../models/user.model';
import { UserProvider } from './../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-curriculo',
  templateUrl: 'curriculo.html',
})

export class Curriculo {

   users: FirebaseListObservable<User[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {

  }

  ionViewDidLoad() {
     this.users = this.userProvider.users;
  }

}

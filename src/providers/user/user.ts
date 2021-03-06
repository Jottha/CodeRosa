import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from './../../models/user.model';
import { BaseProvider } from "../base/base";

@Injectable()
export class UserProvider extends BaseProvider{

  users: FirebaseListObservable<User[]>;

  constructor(
    public http: Http,
    public af: AngularFire
    ) {
      super();
      this.users = this.af.database.list(`/users`);
  }

  create(user: User): firebase.Promise<void> {
    return this.af.database.object(`/users/${ user.uid }`)
    .set(user)
    .catch(this.handlePromiseError);
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Auth } from './models/auth.model';

@Injectable()
export class AuthService {
  auth: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.auth = this.db.list('auth');
  }

  getAuth() {
    return this.auth;
  }

  addAuth(newAuth: Auth) {
    this.auth.push(newAuth);
  }

}

import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  user!: User;
  isUserLoggedIn: boolean = false;

  constructor() {}

  toggleIsUserLoggedIn() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setUserData(user: User) {
    this.user = user;
  }

  getUserData() {
    return this.user;
  }
}

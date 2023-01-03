import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

 // _url = 'http://localhost:3000/register';
  _url = 'register';

  constructor(private _http: HttpClient) { }

  register(user: User) {
    return this._http.post(this._url, user);
  }
}
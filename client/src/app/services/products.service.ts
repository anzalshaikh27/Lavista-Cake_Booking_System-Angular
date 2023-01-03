import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _url = 'product';
 // _url = 'http://localhost:3000/product';
  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get(this._url);
  }

  cartSubject = new Subject<any>();
}
import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  constructor(private _productService: ProductsService, private cookieService : CookieService,private router: Router,
    private _loginService: LoginService ) {
    this._loginService.currentUser.subscribe(x => this.currentUser = x);
    this._productService.cartSubject.subscribe((data)=>{
        this.cartItem = data;
    });
   }

  ngOnInit(): void {
    this.cartItemFunc();

  }

  //current_User = JSON.parse(this.cookieService.get('Current_User_Name'));
  //Binding Data
  cartItem: number = 0;
  cartItemFunc(){
    if(localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart'));
      this.cartItem = cartCount.length;

    }
  }
  logout() {
    this.cookieService.delete("Current_User_Name");
    this.cookieService.delete("Current_User_Email");
    this._loginService.logout();
    this.router.navigate(['/login']);
}
}


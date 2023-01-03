import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';
import { SharedService } from 'src/app/services/shared.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = new User('', '', '', '', '', '', '', '', '');
  isInvalid: boolean = false;
  _msg: string = '';
  
  validCred: boolean = false;
  isUserLoggedIn: boolean = false;
  constructor(
    private cookieService : CookieService,
    private _loginService: LoginService,
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    
    this._loginService.login(this.userModel).subscribe(
      (data: any) => {
       // alert( JSON.stringify(data));
       // console.log('sd',data);
        this.validCred = true;
        this._msg = data.message;
        
        this.cookieService.set("Current_User_Name",data.firstname);
        this.cookieService.set("Current_User_Email",data.email);
        
        //this.cookieService.set("amddk","abc");

        this._sharedService.toggleIsUserLoggedIn();
        this.isUserLoggedIn = this._sharedService.getIsUserLoggedIn();
      },
      (err) => {
        this.isInvalid = true;
        this._msg = err.error.message;
      }
    );
  }
  

  
  
}

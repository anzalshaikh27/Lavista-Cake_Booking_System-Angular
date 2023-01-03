import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { RegisterService } from 'src/app/services/register.service';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from 'angularx-social-login';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  
})

export class RegisterComponent implements OnInit {
  
   _user!: SocialUser;
  _msg: string = '';
 
  userModel = new User('', '', '', '', '', '', '', '', '');
  isInvalid: boolean = false;
  signupSuccess: boolean = false;

  constructor(
    private _signupService: RegisterService,
    
  ) {}

  ngOnInit(): void {
    
  }
  onSubmit() {
    this._signupService.register(this.userModel).subscribe(
      (msg: any) => {
        this.signupSuccess = true;
        this._msg = msg.message;
      },
      (err) => {
        this.isInvalid = true;
        this._msg = err.error.message;
      }
    );
  }


}

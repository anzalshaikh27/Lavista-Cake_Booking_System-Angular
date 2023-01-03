

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ViewFeedbackService } from 'src/app/services/view-feedback.service';
import { CookieService } from 'ngx-cookie-service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [ViewFeedbackService]
})
export class FeedbackComponent implements OnInit {

  current_user : String;
  current_user_id : String;
  isLogggedIn : boolean;
  searchText;
  data : any;

  constructor(
    private cookieService: CookieService,
    private fbListService : ViewFeedbackService
  ) { }

  ngOnInit(): void {

    this.isLogggedIn = this.cookieService.check("Current_User_Name");

    if(this.isLogggedIn){
      this.current_user = this.cookieService.get("Current_User_Name");
      this.current_user_id = this.cookieService.get("Current_User_Email")
    }

    console.log("This is the current user id: ",this.current_user);


    this.fbListService.getPostListOfUser(this.current_user).subscribe((data:any) =>{
      this.data = data;
      console.log(data)
    });

  }

}

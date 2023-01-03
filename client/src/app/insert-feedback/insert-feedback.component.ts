

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from './feedback';
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'app-insert-feedback',
    templateUrl: './insert-feedback.component.html',
    styleUrls: ['./insert-feedback.component.css'],
    
  })
export class InsertFeedbackComponent{

  title = 'app';
  postModel = new Feedback('','','');
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  showMsg: boolean = false;
  

  constructor(
    private cookieService : CookieService,
    private _feedbackService: FeedbackService) {}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {

    this.postModel.user_name = this.cookieService.get("Current_User_Name");
    console.log(`At the time of submission following is the data: ${this.postModel.post_title}`)
    this.submitted = true;
    this._feedbackService.enroll(this.postModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
    this.showMsg = true;
  }
  
}


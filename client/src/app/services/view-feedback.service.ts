

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViewFeedbackService {
  
  //_url = "http://localhost:3000/feedback"
  _url = "feedback"
  constructor(private http: HttpClient) {}

  getFeedback(){
    return this.http.get(this._url);
  }

  getPostListOfUser(username:String){

    var feedback_by_user_url = `feedback/${username}`
    //var feedback_by_user_url = `http://localhost:3000/feedback/${username}`
    return this.http.get(feedback_by_user_url);
  }
}


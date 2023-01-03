

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Feedback } from '../classes/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
 // _url = 'http://localhost:3000/open_post';
  _url = 'open_post';
  constructor(private _http: HttpClient) { }

  enroll (post: Feedback) {
    return this._http.post<any>(this._url, post)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
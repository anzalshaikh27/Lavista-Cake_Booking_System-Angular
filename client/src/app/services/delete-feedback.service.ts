

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Feedback } from '../classes/feedback';

@Injectable({
  providedIn: 'root'
})
export class DeleteFeedbackService {
  _url = 'delete-feedback';
  // _url = 'http://localhost:3000/delete-feedback';
  constructor(private _http: HttpClient) { }

  delete (post: Feedback) {
    return this._http.post<any>(this._url, post)
      .pipe(catchError(this.errorHandler))
  }
  

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}

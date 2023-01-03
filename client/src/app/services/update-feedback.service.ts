

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Feedback } from '../classes/feedback';

@Injectable({
  providedIn: 'root'
})
export class UpdateFeedbackService {

  _url = 'update-feedback';
 // _url = 'http://localhost:3000/update-feedback';
  constructor(private _http: HttpClient) { }

  update (feedback : Feedback) {
    return this._http.post<any>(this._url, feedback)
      .pipe(catchError(this.errorHandler))
  }
  

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
  
}


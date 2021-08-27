import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CurrentUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl : string = environment.apiUrl;
  private headers = new HttpHeaders({"Credentials": "Include"})

  constructor(private http : HttpClient) { }

  handleError(error : HttpErrorResponse) : Observable<null> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return of(null);
  }

  getUser() : Observable<CurrentUser | null> {
    return this.http.get<CurrentUser>(this.apiUrl + "/api/user", { headers: this.headers, withCredentials: true})
      .pipe(catchError(this.handleError));
  }
}

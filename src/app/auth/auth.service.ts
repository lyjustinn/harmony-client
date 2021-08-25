import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl : string = environment.apiUrl;

  constructor(private http : HttpClient) { }

  handleError(error : HttpErrorResponse) : Observable<boolean> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return of(false);
  }

  isLoggedIn() : Observable<boolean> {
    let headers = new HttpHeaders({'Credentials': 'Include'});

    return this.http.get<boolean>(this.apiUrl+"/api/user/ping", { headers, withCredentials: true })
      .pipe(catchError(this.handleError));

    // return of(true);
  }
}

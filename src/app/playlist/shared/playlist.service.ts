import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PlaylistSet } from './playlist-set.model';
import { Playlist } from './playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
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

  getUserPlaylists(pageNum : number) : Observable<PlaylistSet | null> {
    return this.http.get<PlaylistSet>(this.apiUrl + `/api/playlists?page=${pageNum}`, { headers: this.headers, withCredentials: true})
      .pipe(
        catchError(this.handleError));
  }
}

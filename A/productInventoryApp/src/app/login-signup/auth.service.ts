import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _usersUrl = "http://localhost:3000/users";     /* URL of JSON server + name of key having array */
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
  };

  constructor(private _http: HttpClient) {}

  getAllUsers() {
    return this._http.get(this._usersUrl).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  getUser(idOfUser) {
    return this._http.get(`${this._usersUrl}/${idOfUser}`).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  addUser(newuser) {
    return this._http.post(this._usersUrl, newuser, this.httpOptions).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

}



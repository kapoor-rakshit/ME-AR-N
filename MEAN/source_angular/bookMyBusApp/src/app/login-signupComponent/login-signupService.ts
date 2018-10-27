import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class loginsignupService{
    private _serverurl = "http://localhost:5000/auth";    /* URL of Express server */

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    loginuser(userdata){
        return this._http.post(this._serverurl+"/user/", userdata, this.httpOptions);
    }

    loginadmin(admindata){
        return this._http.post(this._serverurl+"/admin/", admindata, this.httpOptions);
    }

    signupuser(newuser){
        return this._http.post(this._serverurl+"/newuser/", newuser, this.httpOptions);
    }
}
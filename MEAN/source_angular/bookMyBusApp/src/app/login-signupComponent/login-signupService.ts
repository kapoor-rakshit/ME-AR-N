import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class loginsignupService{
    private _serverurl = "/auth";    /* URL of Express server in PRODUCTION */
                                     /* give absolute URL ie localhost:3000/auth in DEV */

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

    signinusergoogle(newuser){
        return this._http.post(this._serverurl+"/newgoogleuser/", newuser, this.httpOptions);
    }
}
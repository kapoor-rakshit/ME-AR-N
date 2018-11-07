import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService{

    private _userUrl = "http://localhost:5000/userconsole";     /* URL of Express server */

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    getAllBookings(){
        return this._http.get(this._userUrl+"/allbookings");
    }

    getDetails(id){
        return this._http.get(this._userUrl+"/details/"+id);
    }

    getHistory(id){
        return this._http.get(this._userUrl+"/history/"+id);
    }

    checkCity(name){
        return this._http.get(this._userUrl+"/checkcity/"+name);
    }

    checkBusForUD(routeno){
        return this._http.get(this._userUrl+"/checkbus/"+routeno);
    }

    checkBus(date, routeno, userid, id){
        return this._http.get(this._userUrl+"/buses/"+userid+"/"+id+"/"+date+"/"+routeno);
    }

    bookBus(newBooking, userid, id){
        return this._http.post(this._userUrl+"/buses/"+userid+"/"+id, newBooking, this.httpOptions);
    }

}
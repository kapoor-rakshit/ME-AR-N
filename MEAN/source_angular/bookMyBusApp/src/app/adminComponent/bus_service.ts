import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BusService{

    private _busesUrl = "/adminconsole/buses";     /* URL of Express server in PRODUCTION */
                                                   /* give absolute URL ie localhost:3000/admincon... in DEV */

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    getBuses() {
        return this._http.get(this._busesUrl);
    }

    getBus(id){
        return this._http.get(this._busesUrl+"/"+id);
    }

    addBus(newBus){
        return this._http.post(this._busesUrl, newBus, this.httpOptions);
    }

    updateBus(updatedbus, id){
        let editBusURL = `${this._busesUrl}/${id}`;
        return this._http.put(editBusURL, updatedbus, this.httpOptions);
    }

    deleteBus(id) {
        let deleteBusURL = `${this._busesUrl}/${id}`;
        return this._http.delete(deleteBusURL);
    }

}
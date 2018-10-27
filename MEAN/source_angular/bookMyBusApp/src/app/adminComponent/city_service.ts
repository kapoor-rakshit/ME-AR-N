import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CityService{

    private _citiesUrl = "http://localhost:5000/adminconsole/cities";     /* URL of Express server */

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    getCities() {
        return this._http.get(this._citiesUrl);
    }

    getCity(id){
        return this._http.get(this._citiesUrl+"/"+id);
    }

    addCity(newCity){
        return this._http.post(this._citiesUrl, newCity, this.httpOptions);
    }

    updateCity(updatedcity, id){
        let editCityURL = `${this._citiesUrl}/${id}`;
        return this._http.put(editCityURL, updatedcity, this.httpOptions);
    }

    deleteCity(id) {
        let deleteCityURL = `${this._citiesUrl}/${id}`;
        return this._http.delete(deleteCityURL);
    }

}
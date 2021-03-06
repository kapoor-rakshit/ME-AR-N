import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public _productsUrl = "http://localhost:3000/products";     /* URL of JSON server + name of key having array */
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
};

  constructor(private _http: HttpClient) {  }

  getProducts() {
    return this._http.get(this._productsUrl);
  }

  getProduct(id) {
    let productURL = `${this._productsUrl}/${id}`;
    return this._http.get(productURL);
  }

  addProduct(newProduct){
    return this._http.post(this._productsUrl, newProduct, this.httpOptions);
  }
}

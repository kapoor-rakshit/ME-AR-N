import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/* Add this service class to providers array of respective module */

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

  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get(this._productsUrl).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  getProduct(idOfProduct) {
    return this._http.get(`${this._productsUrl}/${idOfProduct}`).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  addProduct(newProduct) {
    return this._http.post(this._productsUrl, newProduct, this.httpOptions).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  updateProduct(updatedProduct, idOfProduct) {
    return this._http.put(`${this._productsUrl}/${idOfProduct}`, updatedProduct, this.httpOptions).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  deleteProduct(idOfProduct) {
    return this._http.delete(`${this._productsUrl}/${idOfProduct}`).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  incrementClicks(updatedClicks, idOfProduct) {
    return this._http.patch(`${this._productsUrl}/${idOfProduct}`, updatedClicks, this.httpOptions).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

  getTopProducts() {
    return this._http.get(`${this._productsUrl}?_sort=clicks&_order=desc`).pipe(catchError((err: Error) => { return throwError(err.message) }));
  }

}

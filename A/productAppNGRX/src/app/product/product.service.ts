import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productsURL = "http://localhost:3000/products";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productsURL).pipe(
      catchError(err => throwError(err.message))
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>(this._productsURL, product, this.httpOptions).pipe(
      catchError(err => throwError(err.message))
    );
  }
}

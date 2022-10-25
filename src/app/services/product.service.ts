import { Injectable } from '@angular/core';
import { product } from '../models/product';
import {Observable } from'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  _url = 'api/products';
  // private  _url = 'http://localhost:4200/assets/data.json';


  constructor(private http : HttpClient) {

  }
    getProduct():Observable<product[]>{
      // return this.http.get<product[]>('http://localhost:4200/assets/data.json')
      return this.http.get<product[]>(this._url)

    }

    getProductID(id: number) {
      const url = `${this._url}/${id}`;
    return this.http.get<product[]>(url);
      // return this.http.get<product[]>(this._url)
      // return this.http.get<product[]>(`http://localhost:4200/assets/data.json/${id}`);
    }
}

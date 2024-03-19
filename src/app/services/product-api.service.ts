import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProduct, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private _http = inject(HttpClient);
  private urlApiBase: string = 'https://dummyjson.com/products';

  getProducts(): Observable<Product[]> {
    return this._http.get<IProduct>(this.urlApiBase).pipe(
      map(response => response.products)
    );
  }

  getProductById(id: string):Observable<Product> {
    return this._http.get<Product>(`${this.urlApiBase}/${id}`);
  }
}

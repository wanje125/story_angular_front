import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private jsonPath = 'assets/data.json';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    console.log('product data is sending')
    return this.http.get<Product[]>(this.jsonPath);
  }
}

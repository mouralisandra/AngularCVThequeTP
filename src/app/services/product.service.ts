import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, skip, take, tap, throwError} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  link = 'https://dummyjson.com/products';
  //private productsSubject = new BehaviorSubject<Product[]>([]);
  //product$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadProducts(take: number, skip: number = 0): Observable<Product[]> {
    const url = `${this.link}?skip=${skip}&limit=${take}`;
    return this.http
      .get<{ products: Product[] }>(url)
      .pipe(
        map((response) => response.products),
        catchError((error) => {
          console.error('Error loading Products from the API:', error);
          return throwError('Unable to load Products from the API .');
        })
      );
  }
}

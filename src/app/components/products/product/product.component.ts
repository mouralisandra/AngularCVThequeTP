import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../models/Product";
import { BehaviorSubject, Observable, tap, scan, takeWhile } from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();
  loading = false;
  public loadedProducts = 12;
  private moreProducts = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadInitialProducts();
  }

  loadInitialProducts(): void {
    this.loading = true;
    this.productService
      .loadProducts(this.loadedProducts)
      .pipe(
        tap((products) => {
          this.productsSubject.next(products);
          this.loading = false;
        })
      )
      .subscribe();
  }

  showMore(): void {
    if (!this.moreProducts) {
      return;
    }

    this.loading = true;
    this.productService
      .loadProducts(12, this.loadedProducts)
      .pipe(
        takeWhile(newProducts => newProducts.length > 0),
        scan((acc: Product[], newProducts: Product[]) => [...acc, ...newProducts], this.productsSubject.value),
      )
      .subscribe(accumulatedProducts => {
        this.productsSubject.next(accumulatedProducts);
        this.loadedProducts += 12;
        this.moreProducts = this.loadedProducts < 100;
        this.loading = false;
      });
  }
}

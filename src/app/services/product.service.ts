import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/mock/products.json'; // Path to the mock products JSON file

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return of([]); // Return an empty array if there's an error
      })
    );
  }

  getProductById(productId: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === productId))
    );
  }

  addProduct(productData: Product): Observable<Product> {
    // Assuming you have logic here to add the product to the mock data
    // For simplicity, let's just return the product data
    return of(productData);
  }
}

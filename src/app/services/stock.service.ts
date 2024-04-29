import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocksUrl = 'assets/mock/stocks.json'; // Path to the mock stocks JSON file

  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.stocksUrl).pipe(
      catchError(error => {
        console.error('Error fetching stocks:', error);
        return of([]); // Return an empty array if there's an error
      })
    );
  }

  addStock(productId: number, quantity: number): Observable<any> {
    return this.getStocks().pipe(
      // Update the stock quantity for the given product ID
      map((stocks: any[]) => {
        const updatedStocks = stocks.map(stock => {
          if (stock.productId === productId) {
            return { ...stock, quantity: stock.quantity + quantity };
          }
          return stock;
        });
        // Replace the mock stocks.json file with the updated stocks
        return updatedStocks;
      }),
      catchError(error => {
        console.error('Error adding stock:', error);
        return of([]); // Return an empty array if there's an error
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
        throw error; // Rethrow the error so it can be caught by the component
      })
    );
  }
}

// stock.service.ts
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[] = [
    { id: 1, productId: 1, quantity: 100 },
    { id: 2, productId: 2, quantity: 50 },
    // Add more stock items as needed
  ];

  constructor() { }

  getAllStocks(): Stock[] {
    return this.stocks;
  }

  getStockByProductId(productId: number): Stock | undefined {
    return this.stocks.find(stock => stock.productId === productId);
  }

  // Add methods for adding/editing stock
}

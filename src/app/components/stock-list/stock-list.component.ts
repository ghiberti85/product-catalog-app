import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.loadStocks();
  }

  loadStocks(): void {
    this.stockService.getStocks().subscribe(
      (stocks: Stock[]) => {
        this.stocks = stocks;
      },
      (error: any) => {
        console.error('Error fetching stocks:', error);
      }
    );
  }
}

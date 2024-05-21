import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.loadStocks();
  }

  loadStocks(): void {
    this.stockService.getStocks().subscribe(
      stocks => this.stocks = stocks,
      error => console.error('Error fetching stocks:', error)
    );
  }
}

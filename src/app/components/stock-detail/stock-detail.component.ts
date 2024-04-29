import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../../models/stock.model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  stock: Stock | undefined;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.loadStock();
  }

  loadStock(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStockById(id).subscribe(
      (stock: Stock | undefined) => {
        this.stock = stock;
      },
      (error: any) => {
        console.error('Error fetching stock:', error);
      }
    );
  }
}

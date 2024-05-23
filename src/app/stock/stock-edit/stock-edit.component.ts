import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  stock: Stock | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    const stockId = this.route.snapshot.paramMap.get('id');
    if (stockId) {
      this.stockService.getStockById(+stockId).subscribe(
        stock => this.stock = stock,
        error => console.error('Error fetching stock:', error)
      );
    }
  }

  saveStock(): void {
    if (this.stock) {
      this.stockService.updateStock(this.stock).subscribe(
        () => this.router.navigate(['/stocks']),
        error => console.error('Error updating stock:', error)
      );
    }
  }
}

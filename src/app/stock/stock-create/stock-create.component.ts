import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent {
  stock: Stock = { id: 0, productName: '', quantity: 0, location: '' };

  constructor(
    private stockService: StockService,
    private router: Router
  ) { }

  createStock(): void {
    this.stockService.addStock(this.stock).subscribe(
      () => this.router.navigate(['/stocks']),
      error => console.error('Error creating stock:', error)
    );
  }
}

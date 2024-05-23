import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order-service';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {
  order: Order = { id: 0, clientName: '', total: 0, status: 'Pending' };

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  createOrder(): void {
    this.orderService.addOrder(this.order).subscribe(
      () => this.router.navigate(['/orders']),
      error => console.error('Error creating order:', error)
    );
  }
}

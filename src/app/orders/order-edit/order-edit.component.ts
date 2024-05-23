import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order-service';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  order: Order | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.orderService.getOrderById(+orderId).subscribe(
        order => this.order = order,
        error => console.error('Error fetching order:', error)
      );
    }
  }

  saveOrder(): void {
    if (this.order) {
      this.orderService.updateOrder(this.order).subscribe(
        () => this.router.navigate(['/orders']),
        error => console.error('Error updating order:', error)
      );
    }
  }
}

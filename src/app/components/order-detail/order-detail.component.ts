import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderId: number | null = null;
  order: Order | undefined;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const orderIdParam = params.get('id');
      if (orderIdParam) {
        this.orderId = parseInt(orderIdParam, 10);
        this.loadOrderDetails(this.orderId);
      }
    });
  }

  loadOrderDetails(orderId: number): void {
    this.orderService.getOrderById(orderId).subscribe(
      (order: Order | undefined) => {
        this.order = order;
      },
      (error: any) => {
        console.error('Error fetching order details:', error);
      }
    );
  }
}

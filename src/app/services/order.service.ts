// order.service.ts
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    { id: 1, clientId: 1, products: [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }] },
    { id: 2, clientId: 2, products: [{ productId: 1, quantity: 3 }] },
    // Add more orders as needed
  ];

  constructor() { }

  getAllOrders(): Order[] {
    return this.orders;
  }

  getOrdersByClientId(clientId: number): Order[] {
    return this.orders.filter(order => order.clientId === clientId);
  }

  // Add methods for adding/editing orders
}

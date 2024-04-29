// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'assets/mock/orders.json'; // Path to the mock orders JSON file

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
      catchError(error => {
        console.error('Error fetching orders:', error);
        return []; // Return an empty array if there's an error
      })
    );
  }

  getOrderById(orderId: number): Observable<Order | undefined> {
    return this.getOrders().pipe(
      map(orders => orders.find(order => order.id === orderId))
    );
  }

  addOrder(orderData: any): Observable<any> {
    const orderToAdd: Order = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID for the order (replace with actual ID generation logic)
      clientId: orderData.clientId,
      clientName: orderData.clientName,
      orderDate: new Date(), // Use the current date as the order date
      products: orderData.products // Assuming products is an array of OrderItem objects in the order
    };

    console.log('Adding order:', orderToAdd);
    return of(orderToAdd); 
  }
}

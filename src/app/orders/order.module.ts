import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderService } from './order-service';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
  ],
  providers: [OrderService]
})
export class OrdersModule { }

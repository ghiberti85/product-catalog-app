import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockRoutingModule } from './stock-routing.module';
import { StockService } from './stock.service';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [
    StockListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StockRoutingModule
  ],
  providers: [StockService]
})
export class StockModule { }

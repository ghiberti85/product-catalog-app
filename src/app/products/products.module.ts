import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './product-list/produtct-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }

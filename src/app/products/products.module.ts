import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCreateRoutingModule } from './product-create/product-create-routing.module'; // Import the product create routing module
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component'; // Import the product create component

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductCreateComponent // Add the product create component to the declarations array
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductCreateRoutingModule // Add the product create routing module to the imports array
  ],
  providers: [ProductService]
})
export class ProductsModule { }

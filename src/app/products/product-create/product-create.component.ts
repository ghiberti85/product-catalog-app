import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = { id: 0, name: '', price: 0, description: '' };

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  saveProduct(): void {
    this.productService.addProduct(this.product).subscribe(
      () => {
        // Navigate back to products list after saving
        this.router.navigate(['/products']);
      },
      error => {
        console.error('Error saving product:', error);
      }
    );
  }
}

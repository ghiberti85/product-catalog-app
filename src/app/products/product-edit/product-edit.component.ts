import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = { id: 0, name: '', price: 0, description: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(
      product => {
        this.product = product;
      },
      error => {
        console.error('Error loading product details:', error);
      }
    );
  }

  saveProduct(): void {
    this.productService.updateProduct(this.product).subscribe(
      () => {
        // Navigate back to product details after saving
        this.router.navigate(['/products', 'details', this.product.id]);
      },
      error => {
        console.error('Error saving product:', error);
      }
    );
  }
}

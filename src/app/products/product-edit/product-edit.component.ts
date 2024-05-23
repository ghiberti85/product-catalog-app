import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe(
        product => this.product = product,
        error => console.error('Error fetching product:', error)
      );
    }
  }

  saveProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product).subscribe(
        () => this.router.navigate(['/products']),
        error => console.error('Error updating product:', error)
      );
    }
  }
}

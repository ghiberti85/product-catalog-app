import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filter: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.applyFilter();
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }

  applyFilter(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}

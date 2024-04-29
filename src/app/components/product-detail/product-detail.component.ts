// product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Observable<Product | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const productId: number = idParam ? +idParam : 0; // Default value is 0 if idParam is falsy

    this.product = this.productService.getProducts().pipe(
      map(products => products.find(product => product.id === productId))
    );
  }
}

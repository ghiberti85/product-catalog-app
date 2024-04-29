// product-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})


export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productService.addProduct(formData).subscribe(
        (response: any) => {
          console.log('Product added successfully:', response);
          this.productForm.reset();
        },
        (error: any) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}

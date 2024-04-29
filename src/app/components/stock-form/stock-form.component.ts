import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  stockForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private stockService: StockService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.stockForm = this.formBuilder.group({
      productName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.stockForm.valid) {
      const formData = this.stockForm.value;
      this.stockService.addStock(formData.productName, formData.quantity).subscribe(
        (response: any) => {
          console.log('Stock added successfully:', response);
          this.stockForm.reset();
        },
        (error: any) => {
          console.error('Error adding stock:', error);
        }
      );
    } else {
      this.stockForm.markAllAsTouched();
    }
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.orderForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const formData = this.orderForm.value;
      this.orderService.addOrder(formData).subscribe(
        (response: any) => {
          console.log('Order added successfully:', response);
          this.orderForm.reset();
        },
        (error: any) => {
          console.error('Error adding order:', error);
        }
      );
    } else {
      this.orderForm.markAllAsTouched();
    }
  }
}

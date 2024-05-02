import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

export class AppModule { }


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
product: any;
filterProducts() {
throw new Error('Method not implemented.');
}
  title = 'product-catalog-app';
searchTerm: any;

}

import { Component } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Catalog Management';

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  role: 'Admin' | 'Seller' | 'Client' = 'Client';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    this.authService.login(this.role);
  }
}

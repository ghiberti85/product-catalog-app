// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  currentUserRole: string | undefined | null;

  login(username: string, password: string): boolean {
    // Simulate authentication logic here (replace with actual authentication)
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.currentUserRole = 'Admin';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUserRole = null;
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

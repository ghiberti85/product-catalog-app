import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRole: 'Admin' | 'Seller' | 'Client' | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Your authentication logic goes here
    // For simplicity, let's assume login is successful if username and password are not empty
    if (username && password) {
      // Set the current user role based on authentication
      this.currentUserRole = 'Admin'; // Example role for demonstration purposes
      return true; // Return true if login is successful
    }
    return false; // Return false if login fails
  }

  logout(): void {
    this.currentUserRole = null;
    this.router.navigate(['/login']);
  }

  getRole(): 'Admin' | 'Seller' | 'Client' | null {
    return this.currentUserRole;
  }

  isAdmin(): boolean {
    return this.currentUserRole === 'Admin';
  }

  isSeller(): boolean {
    return this.currentUserRole === 'Seller';
  }

  isClient(): boolean {
    return this.currentUserRole === 'Client';
  }
}

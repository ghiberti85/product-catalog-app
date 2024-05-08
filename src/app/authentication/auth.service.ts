import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Simulate authentication logic
  login(username: string, password: string): boolean {
    // In a real application, you would make an HTTP request to authenticate the user
    // For simplicity, we'll just check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
      // Store user details in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify({ username, role: 'Admin' }));
      return true;
    }
    return false;
  }

  logout(): void {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

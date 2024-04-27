// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      // User is authenticated, check role-based access
      const expectedRole = next.data['expectedRole'];
      if (expectedRole && expectedRole !== this.authService.currentUserRole) {
        // User does not have expected role, redirect to unauthorized page
        this.router.navigate(['/unauthorized']);
        return false;
      }
      return true;
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}

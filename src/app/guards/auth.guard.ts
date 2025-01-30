import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.authService.getToken();
    const userRole = this.authService.getUserRole();

    if (!token) {
      this.router.navigate(['/']);
      return false;
    }

    if (userRole === 'admin') {
      return true; 
    }

    if (userRole === 'usuario' && route.routeConfig?.path === 'usuario') {
      return true; 
    }

    this.router.navigate(['/']);
    return false;
  }
}

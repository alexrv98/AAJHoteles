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

    console.log('Token:', token);  // Verificar si el token está presente
    console.log('User Role:', userRole);  // Verificar el rol del usuario

    if (!token) {
      this.router.navigate(['/']);
      return false;
    }

    // Permitir el acceso a admins y usuarios según la ruta
    if (userRole === 'admin' && (route.routeConfig?.path === 'admin' || route.routeConfig?.path === 'hoteles/:id' || route.routeConfig?.path === 'habitaciones/:id')) {
      return true;
    }

    if (userRole === 'usuario' && (route.routeConfig?.path === 'usuario' || route.routeConfig?.path === 'reservacion')) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}

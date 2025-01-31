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

    if (
      userRole === 'usuario' &&
      (route.routeConfig?.path === 'usuario' ||
        route.routeConfig?.path === 'reservacion' ||
        route.routeConfig?.path === 'comentario' ||
        route.routeConfig?.path === 'home' ||
        route.routeConfig?.path === 'misreservas' ||
        route.routeConfig?.path?.startsWith('lugar-hoteles') ||
        route.routeConfig?.path?.startsWith('habitacionesUsuario')) 
    ) {
      return true; // El usuario puede acceder a home, reservacion y usuario
    }

    // Si no coincide ninguna ruta, redirigir al home o login
    this.router.navigate(['/']);
    return false;
  }
}

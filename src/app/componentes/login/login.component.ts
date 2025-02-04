import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavusuarioComponent } from '../navusuario/navusuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterModule, NavusuarioComponent],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.correo, this.password).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response); 
        if (response.status === 'success') {
          this.authService.saveToken(response.token, response.rol, response.nombre);

          // Obtener el rol desde el localStorage
          const userRole = this.authService.getUserRole();

          if (userRole === 'admin') {
            // Si el usuario es admin, redirigirlo a la vista de administración
            console.log('Usuario admin detectado, redirigiendo a /admin');
            this.router.navigate(['/admin']);
            return;
          }

          if (userRole === 'usuario') {
            // Si el usuario es normal, verificar si tiene reserva pendiente
            const reservaPendiente = localStorage.getItem('reservaPendiente');

            let ruta: string;
            if (reservaPendiente) {
              ruta = '/reserva-con-cuenta'; // Redirigir a reserva con cuenta
            } else {
              ruta = '/'; // Redirigir a la página principal
            }

            console.log('Redirigiendo a ruta:', ruta);
            this.router.navigate([ruta]);
          }

        } else {
          this.errorMessage = response.message;
          console.error('Error de login:', response.message);
        }
      },
      error: (err) => {
        console.error('Error en la solicitud', err);
        this.errorMessage = 'Error en el servidor. Intente nuevamente.';
      }
    });
  }
}

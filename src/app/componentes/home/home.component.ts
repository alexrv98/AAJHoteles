import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LugaresService } from '../../services/lugares.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FormsModule], // Agrega FormsModule para usar ngModel
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private authService: AuthService) {} // Inyecta el servicio

  logout(): void {
    this.authService.logout(); // Llama la función logout
    window.location.reload(); // Recargar para reflejar cambios en la UI
  }
}

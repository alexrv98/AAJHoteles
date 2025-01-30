import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
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

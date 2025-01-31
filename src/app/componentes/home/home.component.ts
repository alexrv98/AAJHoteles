import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LugaresService } from '../../services/lugares.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // Agrega FormsModule para usar ngModel
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  lugares: any[] = [];
  lugaresFiltrados: any[] = [];
  textoBusqueda: string = ''; // Almacena el texto del input
  lugaresService: LugaresService = inject(LugaresService);

  constructor(private authService: AuthService) {
    this.lugaresService.obtenerLugares().subscribe((data: any[]) => {
      this.lugares = data;
      this.lugaresFiltrados = data;
    });
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }

  buscar(event: Event): void {
    event.preventDefault(); // Evita que el formulario recargue la página

    if (!this.textoBusqueda) {
      this.lugaresFiltrados = this.lugares;
      return;
    }

    this.lugaresFiltrados = this.lugares.filter((lugar) =>
      lugar.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lugares',
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'], // styleUrls en plural
})
export class LugaresComponent implements OnInit {
  lugares: any[] = [];
  lugaresFiltrados: any[] = [];
  textoBusqueda: string = ''; // Almacena el texto del input

  // Usar inyección con `inject()`
  lugaresService: LugaresService = inject(LugaresService);

  constructor() {}

  ngOnInit(): void {
    this.obtenerLugares();
  }

  obtenerLugares(): void {
    this.lugaresService.obtenerLugares().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.lugares = response.data;
          this.lugaresFiltrados = response.data; // Aseguramos que los lugares filtrados se llenen
        } else {
          console.error('Error al obtener lugares:', response.message);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
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

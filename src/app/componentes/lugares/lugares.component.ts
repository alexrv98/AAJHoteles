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
  styleUrls: ['./lugares.component.css'],
})
export class LugaresComponent implements OnInit {
  lugares: any[] = [];
  lugaresFiltrados: any[] = [];
  textoBusqueda: string = '';

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
          this.lugaresFiltrados = response.data;
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
    event.preventDefault();

    if (!this.textoBusqueda) {
      this.lugaresFiltrados = this.lugares;
      return;
    }

    this.lugaresFiltrados = this.lugares.filter((lugar) =>
      lugar.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }
}

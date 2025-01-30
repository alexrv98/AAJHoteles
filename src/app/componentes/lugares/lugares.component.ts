import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lugares',
  imports: [CommonModule, RouterModule],
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css',
})
export class LugaresComponent implements OnInit {
  lugares: any[] = [];
  // lugarSeleccionado: any = {};
  // mostrarModal: boolean = false;
  // isEditMode: boolean = false;
  // mostrarModalAgregar: boolean = false;
  // nuevoLugar: any = {
  //   nombre: '',
  //   descripcion: '',
  //   ubicacion: '',
  //   imagen: '',
  // };
  constructor(private lugaresService: LugaresService) {}

  ngOnInit(): void {
    this.obtenerLugares();
  }

  obtenerLugares(): void {
    this.lugaresService.obtenerLugares().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.lugares = response.data;
        } else {
          console.error('Error al obtener lugares:', response.message);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }
}

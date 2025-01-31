import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelesService } from '../../services/hoteles.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavusuarioComponent } from '../navusuario/navusuario.component';

@Component({
  selector: 'app-lugar-hoteles',
  imports: [CommonModule, FormsModule, RouterLink, NavusuarioComponent],
  templateUrl: './lugar-hoteles.component.html',
  styleUrl: './lugar-hoteles.component.css',
})
export class LugarHotelesComponent implements OnInit {
  hoteles: any[] = [];
  lugarId!: number;
  hotelesFiltrados: any[] = [];
  textoBusqueda: string = ''; 
  mostrarModalAgregar: boolean = false;
  nuevoHotel: any = {
    nombre: '',
    descripcion: '',
    direccion: '',
    telefono: '',
    estrellas: 1,
  };
  hotelSeleccionado: any = {};
  mostrarModalEditar: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private hotelesService: HotelesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.lugarId = Number(params.get('id'));
      if (this.lugarId) {
        this.obtenerHoteles();
      }
    });
  }

  obtenerHoteles(): void {
    this.hotelesService.getHotelesPorLugar(this.lugarId).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.hotelesFiltrados = response.data;
          this.hoteles = response.data;
        } else {
          console.error('Error al obtener hoteles:', response.message);
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
      this.hotelesFiltrados = this.hoteles;
      return;
    }

    this.hotelesFiltrados = this.hoteles.filter((hoteles) =>
      hoteles.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }
}

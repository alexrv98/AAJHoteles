import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { HotelesService } from '../../services/hoteles.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lugar-hoteles',
  imports: [CommonModule, FormsModule, RouterLink, HomeComponent],
  templateUrl: './lugar-hoteles.component.html',
  styleUrl: './lugar-hoteles.component.css',
})
export class LugarHotelesComponent implements OnInit {
  hoteles: any[] = [];
  lugarId!: number;
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
}

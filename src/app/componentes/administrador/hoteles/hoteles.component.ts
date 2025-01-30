import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelesService } from '../../../services/hoteles.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  imports:[CommonModule, FormsModule],
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
  hoteles: any[] = [];
  lugarId!: number;
  mostrarModalAgregar: boolean = false;
  nuevoHotel: any = {
    nombre: '',
    descripcion: '',
    direccion: '',
    telefono: '',
    estrellas: 1
  };
  hotelSeleccionado: any = {};
  mostrarModalEditar: boolean = false;


  constructor(private route: ActivatedRoute, private hotelesService: HotelesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
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
      }
    });
  }

  abrirModalAgregar(): void {
    this.nuevoHotel = {
      nombre: '',
      descripcion: '',
      direccion: '',
      telefono: '',
      estrellas: 1
    };
    this.mostrarModalAgregar = true;  
  }

  cerrarModalAgregar(): void {

    this.mostrarModalAgregar = false; 
  }


  guardarNuevoHotel(formAgregar: any): void {
    if (formAgregar.valid) {
      const hotelConLugarId = {
        ...this.nuevoHotel,
        lugar_id: this.lugarId 
      };
  
      this.hotelesService.addHotel(hotelConLugarId).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.obtenerHoteles();
            this.cerrarModalAgregar();
          } else {
            console.error('Error al agregar el hotel:', response.message);
          }
        },
        error: (error) => {
          console.error('Error al agregar hotel:', error);
        }
      });
    }
  }


  abrirModalEditar(hotel: any): void {
    this.hotelSeleccionado = { ...hotel }; 
    this.mostrarModalEditar = true;
  }

  guardarEdicion(): void {
    this.hotelesService.updateHotel(this.hotelSeleccionado).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.obtenerHoteles();
          this.cerrarModalEditar();
        } else {
          console.error('Error al actualizar el hotel:', response.message);
        }
      },
      error: (error) => {
        console.error('Error en la solicitud para actualizar el hotel:', error);
      }
    });
  }

  cerrarModalEditar(): void {
    this.mostrarModalEditar = false;
  }

  eliminarHotel(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este hotel?')) {
      this.hotelesService.eliminarHotel(id).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.obtenerHoteles(); 
          } else {
            console.error('Error al eliminar el hotel:', response.message);
          }
        },
        error: (error) => {
          console.error('Error en la solicitud para eliminar el hotel:', error);
        }
      });
    }
  }
  
  
}

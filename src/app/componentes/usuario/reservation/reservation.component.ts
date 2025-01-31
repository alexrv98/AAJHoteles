import { Component, OnInit } from '@angular/core';
import { ReservacionService } from '../../../services/reservacion.service';
import { Router, RouterLink } from '@angular/router';  // Importar Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']

})
export class reservationComponent implements OnInit {
  lugares: any[] = [];
  hoteles: any[] = [];
  tiposHabitacion: any[] = [];
  habitaciones: any[] = [];

  lugarId: number = 0;
  hotelId: number = 0;
  tipoHabitacionId: number = 0;
  habitacionId: number = 0;
  fechaInicio: string = '';
  fechaFin: string = '';
  precioHabitacion: number = 0;
  imagenLugar: string = '';

  constructor(private usuarioService: ReservacionService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Si no hay token, redirige al usuario al login
      this.router.navigate(['/login']);
    } else {
      this.cargarLugares();
      this.cargarTiposHabitacion();
    }
  }

  cargarLugares() {
    this.usuarioService.getLugares().subscribe(
      (data: any) => {
        this.lugares = data.data;
      },
      error => {
        console.error('Error al cargar lugares', error);
      }
    );
  }

  cargarHoteles() {
    if (this.lugarId) {
      const lugarSeleccionado = this.lugares.find(lugar => lugar.id == this.lugarId);
      this.imagenLugar = lugarSeleccionado ? lugarSeleccionado.imagen : '';

      this.usuarioService.getHoteles(this.lugarId).subscribe(
        (data: any) => {
          this.hoteles = data.data;
        },
        error => {
          console.error('Error al cargar hoteles', error);
        }
      );
    }
  }

  cargarHabitaciones() {
    if (this.hotelId) {
      this.usuarioService.getHabitaciones(this.hotelId).subscribe(
        (data: any) => {
          this.habitaciones = data.data;
        },
        error => {
          console.error('Error al cargar habitaciones', error);
        }
      );
    }
  }

  actualizarPrecio() {
    const habitacionSeleccionada = this.habitaciones.find(h => h.id == this.habitacionId);
    this.precioHabitacion = habitacionSeleccionada ? habitacionSeleccionada.precio : 0;
  }

  cargarTiposHabitacion() {
    this.usuarioService.getTiposHabitacion().subscribe(
      (data: any) => {
        this.tiposHabitacion = data.data;
      },
      error => {
        console.error('Error al cargar tipos de habitación', error);
      }
    );
  }

  verificarCamposCompletos() {
    return this.lugarId && this.hotelId && this.tipoHabitacionId && this.habitacionId && this.fechaInicio && this.fechaFin;
  }

  enviarReserva() {
    if (!this.verificarCamposCompletos()) {
      console.error("Todos los campos deben ser seleccionados.");
      return;
    }

    // Convertir las fechas a formato ISO 8601
    const fechaInicioISO = new Date(this.fechaInicio).toISOString();
    const fechaFinISO = new Date(this.fechaFin).toISOString();

    const reservacion = {
      lugar_id: this.lugarId,
      hotel_id: this.hotelId,
      tipo_habitacion_id: this.tipoHabitacionId,
      habitacion_id: this.habitacionId,
      fecha_inicio: fechaInicioISO,
      fecha_fin: fechaFinISO
    };

    this.usuarioService.hacerReservacion(reservacion).subscribe(
      (data: any) => {
        if (data.status === 'error' && data.message === 'La habitación ya está reservada') {
          console.error('La habitación ya está reservada. Por favor, elija otra habitación.');
          alert('La habitación ya está reservada. Por favor, elija otra habitación.');
        } else if (data.status === 'success') {
          console.log('Reserva realizada con éxito', data);
          alert('Reserva realizada con éxito');

          // Redirigir a la página principal después de una reserva exitosa
          this.router.navigate(['/usuario']);
        }
      },
      error => {
        console.error('Error al hacer la reservación', error);
        alert('Error al hacer la reservación. Intente de nuevo más tarde.');
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ReservacionService } from '../../services/reservacion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  lugares: any[] = [];
  hoteles: any[] = [];
  tiposHabitacion: any[] = [];
  habitaciones: any[] = [];

  lugarId: number = 0;
  hotelId: number = 0;
  tipoHabitacionId: number = 0;
  habitacionId: number = 0;

  constructor(private usuarioService: ReservacionService) { }

  ngOnInit(): void {
    this.cargarLugares();
    this.cargarTiposHabitacion();
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

  enviarReserva() {
    const reservacion = {
      lugar_id: this.lugarId,
      hotel_id: this.hotelId,
      tipo_habitacion_id: this.tipoHabitacionId,
      habitacion_id: this.habitacionId
    };

    this.usuarioService.hacerReservacion(reservacion).subscribe(
      (data: any) => {
        console.log('Reserva realizada con éxito', data);
      },
      error => {
        console.error('Error al hacer la reservación', error);
      }
    );
  }
}

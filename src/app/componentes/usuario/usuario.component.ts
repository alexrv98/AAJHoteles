import { Component, inject } from '@angular/core';
import { ReservacionService } from '../../services/reservacion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  lugares: any[] = [];
  hoteles: any[] = [];
  habitaciones: any[] = [];
  tiposHabitacion: any[] = [];

  seleccion = {
    lugarId: '',
    hotelId: '',
    tipoHabitacionId: '',
    habitacionId: ''
  };

  constructor(private reservacionService: ReservacionService) {}

  ngOnInit() {
    this.cargarLugares();
  }

  cargarLugares() {
    this.reservacionService.getLugares().subscribe(response => {
      if (response.status === 'success') {
        this.lugares = response.data;
      }
    });
  }

  cargarHoteles() {
    this.reservacionService.getHoteles(this.seleccion.lugarId).subscribe(response => {
      if (response.status === 'success') {
        this.hoteles = response.data;
      }
    });
  }

  cargarHabitaciones() {
    this.reservacionService.getHabitaciones(this.seleccion.hotelId).subscribe(response => {
      if (response.status === 'success') {
        this.habitaciones = response.data;
      }
    });
  }

  cargarTiposHabitaciones() {
    this.reservacionService.getTiposHabitaciones().subscribe(response => {
      if (response.status === 'success') {
        this.tiposHabitacion = response.data;
      }
    });
  }

  hacerReservacion() {
    const datosReservacion = {
      lugar_id: this.seleccion.lugarId,
      hotel_id: this.seleccion.hotelId,
      tipo_habitacion_id: this.seleccion.tipoHabitacionId,
      habitacion_id: this.seleccion.habitacionId,
      usuario_id: 1 // Reemplázalo con el ID real del usuario autenticado
    };

    this.reservacionService.hacerReservacion(datosReservacion).subscribe(response => {
      if (response.status === 'success') {
        alert('¡Reservación realizada con éxito!');
      } else {
        alert('Error al hacer la reservación.');
      }
    });
  }
}

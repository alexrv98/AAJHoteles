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
  tiposHabitacion: any[] = [];
  habitaciones: any[] = [];

  lugarId: number;
  hotelId: number;
  tipoHabitacionId: number;
  habitacionId: number;

  constructor(private usuarioService: ReservacionService) { }

  ngOnInit(): void {
    this.cargarLugares();
    this.cargarTiposHabitacion();
  }

  cargarLugares() {
    this.usuarioService.getLugares().subscribe((data: any) => {
      this.lugares = data.data;
    });
  }

  cargarHoteles() {
    if (this.lugarId) {
      this.usuarioService.getHoteles(this.lugarId).subscribe((data: any) => {
        this.hoteles = data.data;
      });
    }
  }

  cargarHabitaciones() {
    if (this.hotelId) {
      this.usuarioService.getHabitaciones(this.hotelId).subscribe((data: any) => {
        this.habitaciones = data.data;
      });
    }
  }

  cargarTiposHabitacion() {
    this.usuarioService.getTiposHabitacion().subscribe((data: any) => {
      this.tiposHabitacion = data.data;
    });
  }

  enviarReserva() {
    const reservacion = {
      lugar_id: this.lugarId,
      hotel_id: this.hotelId,
      tipo_habitacion_id: this.tipoHabitacionId,
      habitacion_id: this.habitacionId
    };

    this.usuarioService.hacerReservacion(reservacion).subscribe((data: any) => {
      console.log('Reserva realizada con éxito', data);
    });
  }
}

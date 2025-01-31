import { Component, OnInit } from '@angular/core';
import { GestionreservacionesService } from '../../../services/gestionreservaciones.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../home/home.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-gesion-reservaciones',
  templateUrl: './gesion-reservaciones.component.html',
  imports: [CommonModule,HomeComponent, FormsModule,],
  styleUrls: ['./gesion-reservaciones.component.css']
})
export class GesionReservacionesComponent implements OnInit {
  reservaciones: any[] = [];
  reservacionSeleccionada: any;
  estados = ['pendiente', 'confirmada', 'cancelada'];

  constructor(private GestionreservacionesService: GestionreservacionesService) {}

  ngOnInit(): void {
    this.obtenerReservaciones();
  }

  obtenerReservaciones(): void {
    this.GestionreservacionesService.obtenerReservaciones().subscribe(
      (response) => {
        if (response.status === 'success') {
          this.reservaciones = response.data;
        } else {
          console.error('Error al obtener las reservaciones', response.message);
        }
      },
      (error) => {
        console.error('Error de conexión con la API', error);
      }
    );
  }

  seleccionarReservacion(reservacion: any): void {
    this.reservacionSeleccionada = { ...reservacion };
  }

  actualizarEstado(): void {
    if (this.reservacionSeleccionada && this.reservacionSeleccionada.estado) {
      this.GestionreservacionesService.actualizarEstadoReservacion(
          this.reservacionSeleccionada.reservacion_id,
          this.reservacionSeleccionada.estado
        )
        .subscribe(
          (response) => {
            if (response.status === 'success') {
              this.obtenerReservaciones(); 
              alert('Estado actualizado exitosamente');
              this.reservacionSeleccionada = null; 
            } else {
              alert('Error al actualizar el estado');
            }
          },
          (error) => {
            console.error('Error al actualizar el estado', error);
            alert('Error al actualizar el estado');
          }
        );
    } else {
      alert('Por favor, seleccione un estado');
    }
  }
}

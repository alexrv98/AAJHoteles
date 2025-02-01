import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GestionreservacionesService } from '../../../services/gestionreservaciones.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../home/home.component';
import { FormsModule } from '@angular/forms';

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

  constructor(private GestionreservacionesService: GestionreservacionesService, private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.obtenerReservaciones();
  }

  obtenerReservaciones(): void {
    this.GestionreservacionesService.obtenerReservacionesCompleto().subscribe(
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
      // Verificar si el estado es "cancelada" y preguntar por confirmación
      if (this.reservacionSeleccionada.estado === 'cancelada') {
        const confirmarCancelacion = confirm("¿Estás seguro de que deseas cancelar esta reservación?");
        if (!confirmarCancelacion) {
          return; // Si no confirma, no hacer nada
        }
      }
  
      this.GestionreservacionesService.actualizarEstadoReservacion(
          this.reservacionSeleccionada.reservacion_id,
          this.reservacionSeleccionada.estado
        )
        .subscribe(
          (response) => {
            if (response.status === 'success') {
              this.obtenerReservaciones(); // Recargar las reservaciones
              alert('Estado actualizado exitosamente');
              this.reservacionSeleccionada = null; // Cerrar el modal
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
  

  agregarReservacion(nuevaReservacion: any): void {
    this.reservaciones.push(nuevaReservacion);
    this.cdRef.detectChanges();  
  }
}

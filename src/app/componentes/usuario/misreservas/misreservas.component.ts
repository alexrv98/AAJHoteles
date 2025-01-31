import { Component, OnInit } from '@angular/core';
import { GestionreservacionesService } from '../../../services/gestionreservaciones.service';
import { CommonModule } from '@angular/common';
import { NavusuarioComponent } from '../../navusuario/navusuario.component';

@Component({
  selector: 'app-misreservas',
  imports: [CommonModule, NavusuarioComponent],
  templateUrl: './misreservas.component.html',
  styleUrl: './misreservas.component.css'
})

export class MisReservasComponent implements OnInit {
  reservaciones: any[] = [];
  reservacionSeleccionada: any;
  estados = ['pendiente', 'confirmada', 'cancelada'];

  constructor(private gestionreservacionesService: GestionreservacionesService) {}

  ngOnInit(): void {
    this.obtenerReservaciones();
  }

  obtenerReservaciones(): void {
    this.gestionreservacionesService.obtenerReservaciones().subscribe(
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


}

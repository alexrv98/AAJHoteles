import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReservationHabitacionService } from '../../../services/reservation-habitacion.service';
import { NavusuarioComponent } from '../../navusuario/navusuario.component';
import { DataTablesModule } from 'angular-datatables';
import 'datatables.net-searchpanes';
import 'datatables.net-select';
import 'datatables.net-searchpanes-bs5'; // Si usas Bootstrap 5
import 'datatables.net-select-bs5'; // Si usas Bootstrap 5

@Component({
  selector: 'app-reservation-habitacion',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NavusuarioComponent,
    DataTablesModule,
  ],
  templateUrl: './reservation-habitacion.component.html',
  styleUrl: './reservation-habitacion.component.css',
})
export class ReservationHabitacionesComponent implements OnInit {
  habitaciones: any[] = [];
  tiposHabitacion: any[] = [];

  hotelId!: number;
  mostrarModal: boolean = false;
  habitacionSeleccionada: any = null;
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(
    private route: ActivatedRoute,
    private ReservationService: ReservationHabitacionService
  ) {}

  dtOptions: any = {};

  ngOnInit(): void {
    // dataTables
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      paging: true,
      dom: 'Pfrtip',
      select: {
        style: 'multi', // o 'single' si solo quieres seleccionar uno a la vez
        selector: 'td:first-child', // Asegurar que el selector funciona bien
      },
      columnDefs: [
        {
          targets: [0, 1, 2, 3, 4, 5],
          visible: true,
          searchPanes: { show: true },
        },
      ],
      searchPanes: {
        columns: [1, 4, 5], // Solo incluir columnas relevantes (excluir "Acciones")
        dtOpts: {
          select: {
            style: 'multi',
          },
        },
      },
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      },
    };

    // -------------------------------
    this.cargarTiposHabitacion();

    this.route.paramMap.subscribe((params) => {
      this.hotelId = Number(params.get('id'));
      if (this.hotelId) {
        this.obtenerHabitaciones();
      }
    });
  }

  obtenerHabitaciones(): void {
    this.ReservationService.getHabitacionesPorHotel(this.hotelId).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.habitaciones = response.data;
        } else {
          console.error('Error al obtener habitaciones:', response.message);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }

  cargarTiposHabitacion() {
    this.ReservationService.getTiposHabitacion().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.tiposHabitacion = response.data;
        }
      },
      error: (error) => {
        console.error('Error al obtener tipos de habitación', error);
      },
    });
  }

  abrirModalReserva(habitacion: any): void {
    this.habitacionSeleccionada = habitacion;
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.habitacionSeleccionada = null;
  }

  reservar(): void {
    if (!this.fechaInicio || !this.fechaFin) {
      alert('Selecciona una fecha de inicio y fin');
      return;
    }

    // Convertir fecha a formato YYYY-MM-DD HH:MM:SS
    const fechaInicioFormatted = this.formatFecha(this.fechaInicio);
    const fechaFinFormatted = this.formatFecha(this.fechaFin);

    console.log('Reservando con datos:', {
      habitacion_id: this.habitacionSeleccionada.id,
      fecha_inicio: fechaInicioFormatted,
      fecha_fin: fechaFinFormatted,
    });

    this.ReservationService.reservarHabitacion(
      this.habitacionSeleccionada.id,
      fechaInicioFormatted,
      fechaFinFormatted
    ).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        alert(response.message);
        this.cerrarModal();
        this.obtenerHabitaciones();
      },
      error: (error) => {
        console.error('Error en la reserva:', error);
        alert('Error al reservar: ' + error.message);
      },
    });
  }

  formatFecha(fecha: string): string {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Asegurarse de que el mes esté en formato de dos dígitos
    const day = ('0' + date.getDate()).slice(-2); // Asegurarse de que el día esté en formato de dos dígitos
    const hours = ('0' + date.getHours()).slice(-2); // Asegurarse de que la hora esté en formato de dos dígitos
    const minutes = ('0' + date.getMinutes()).slice(-2); // Asegurarse de que los minutos estén en formato de dos dígitos
    const seconds = ('0' + date.getSeconds()).slice(-2); // Asegurarse de que los segundos estén en formato de dos dígitos

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}

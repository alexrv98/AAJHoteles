import { Component, OnInit, inject } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lugares',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RouterLink],
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
})
export class LugaresComponent implements OnInit {
  lugares: any[] = [];
  lugaresFiltrados: any[] = [];
  hotelesDisponibles: any[] = [];
  habitacionesDisponibles: any[] = [];
  otrasHabitacionesDisponibles: any[] = []; 
  hotelSeleccionado: any = null;  
  reserva: any = null;  
  isLoggedIn: boolean = false;  

  filtros = {
    destino: '',
    ubicacion: '',
    fechaInicio: '',
    fechaFin: '',
    huespedes: 1,
    habitaciones: 1,
    dias: 0
  };

  habitacionSeleccionada: any = null;   
  totalReserva: number = 0; 

  lugaresService: LugaresService = inject(LugaresService);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.obtenerLugares();
    const token = localStorage.getItem('authToken'); 
    if (token) {
      this.isLoggedIn = true;
    }
  }
  

  obtenerLugares(): void {
    this.lugaresService.obtenerLugares().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.lugares = response.data;
          this.lugaresFiltrados = response.data;
        } else {
          console.error('Error al obtener lugares:', response.message);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }

  actualizarUbicacion(): void {
    const lugarSeleccionado = this.lugares.find(lugar => lugar.id === this.filtros.destino);
    if (lugarSeleccionado) {
      this.filtros.ubicacion = lugarSeleccionado.ubicacion;
    }
  }

  buscarHoteles(): void {
    this.hotelesDisponibles = [];
    this.hotelSeleccionado = null;
    this.habitacionesDisponibles = [];
    this.otrasHabitacionesDisponibles = [];
    this.habitacionSeleccionada = null;
  
    this.lugaresService.obtenerHotelesDisponibles(this.filtros).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.hotelesDisponibles = response.data;
  
          // Obtener comentarios de cada hotel
          this.hotelesDisponibles.forEach(hotel => {
            this.lugaresService.obtenerComentarios(hotel.id).subscribe({
              next: (comentariosResponse) => {
                if (comentariosResponse.status === 'success') {
                  hotel.comentarios = comentariosResponse.data;
                  hotel.promedioEstrellas = this.calcularPromedioEstrellas(hotel.comentarios);
                } else {
                  hotel.comentarios = [];
                  hotel.promedioEstrellas = 0;
                }
              },
              error: (error) => {
                console.error('Error al obtener comentarios:', error);
                hotel.comentarios = [];
                hotel.promedioEstrellas = 0;
              }
            });
          });
        } else {
          console.error('Error en la búsqueda:', response.message);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }
  
  calcularPromedioEstrellas(comentarios: any[]): number {
    if (comentarios.length === 0) return 0;
    const sumaEstrellas = comentarios.reduce((sum, comentario) => sum + comentario.calificacion, 0);
    return sumaEstrellas / comentarios.length;
  }
  
  // Función para convertir el número de estrellas en un array de estrellas para mostrar en el HTML
  getStarArray(promedio: number): number[] {
    return Array(Math.round(promedio)).fill(1);
  }
  
  

  verHabitaciones(hotel: any): void {
    this.hotelSeleccionado = hotel; 
    this.lugaresService.obtenerHabitacionesDisponibles(hotel.id, this.filtros).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.habitacionesDisponibles = response.data.mejorOpcion;
          this.otrasHabitacionesDisponibles = response.data.otrasHabitaciones;
        } else {
          console.error('Error al obtener habitaciones:', response.message);
        }
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }
  
  
  agregarHabitacion(habitacion: any): void {
    this.habitacionSeleccionada = habitacion; 
    const fechaInicio = new Date(this.filtros.fechaInicio);
    const fechaFin = new Date(this.filtros.fechaFin);
    const diferenciaEnTiempo = fechaFin.getTime() - fechaInicio.getTime();
    const diferenciaEnDias = diferenciaEnTiempo / (1000 * 3600 * 24);
    this.filtros.dias = diferenciaEnDias;

    this.totalReserva = habitacion.precio * diferenciaEnDias;
  }

  confirmarReserva(): void {
    if (!this.habitacionSeleccionada) {
      console.error("No hay habitación seleccionada.");
      return;
    }

    // Guardar la reserva pendiente
    localStorage.setItem('reservaPendiente', JSON.stringify({
      filtros: this.filtros,
      habitacionSeleccionada: this.habitacionSeleccionada,
      totalReserva: this.totalReserva
    }));

    // Si el usuario ya está logueado, lo rediriges a la página de reserva con cuenta
    if (this.isLoggedIn) {
      this.router.navigate(['/reserva-con-cuenta']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  reservarSinCuenta(): void {
    this.router.navigate(['/reserva-sin-cuenta'], {
      queryParams: {
        habitacion: JSON.stringify(this.habitacionSeleccionada),
        total: this.totalReserva,
        fechaInicio: this.filtros.fechaInicio,
        fechaFin: this.filtros.fechaFin,
        tipo: this.habitacionSeleccionada.tipo_habitacion,
        capacidad: this.habitacionSeleccionada.capacidad,
        camas: this.habitacionSeleccionada.camas
      }
    });
  }

  
  
  calcularTotal(habitacion: any): void {
    const fechaInicio = new Date(this.filtros.fechaInicio);
    const fechaFin = new Date(this.filtros.fechaFin);
    const diferenciaEnTiempo = fechaFin.getTime() - fechaInicio.getTime();
    const diferenciaEnDias = diferenciaEnTiempo / (1000 * 3600 * 24);

    const total = habitacion.precio * diferenciaEnDias;
    this.reserva = {
      habitacion: habitacion,
      total: total.toFixed(2),  // Total calculado
      dias: diferenciaEnDias,
      fechaInicio: this.filtros.fechaInicio,
      fechaFin: this.filtros.fechaFin
    };
  }

  reservarHabitacion(habitacion: any): void {
    console.log('Reservando habitación', habitacion);
  }


  
}

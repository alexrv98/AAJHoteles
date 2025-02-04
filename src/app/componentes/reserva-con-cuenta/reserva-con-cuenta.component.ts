import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NavusuarioComponent } from '../navusuario/navusuario.component';
import { ReservaService } from '../../services/reserva.service';
import Swal from 'sweetalert2';

declare var paypal: any;

@Component({
  selector: 'app-reserva-con-cuenta',
  templateUrl: './reserva-con-cuenta.component.html',
  imports: [CommonModule, NavusuarioComponent],
  styleUrls: ['./reserva-con-cuenta.component.css']
})
export class ReservaConCuentaComponent implements OnInit {
  usuario: any = {};
  habitacionSeleccionada: any = null;
  totalReserva: number = 0;
  fechaInicio: string = '';
  fechaFin: string = '';
  pagoConfirmado: boolean = false;

  constructor(
    private authService: AuthService, 
    private reservaService: ReservaService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Obtener datos del usuario
    this.authService.getUserData().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.usuario) {
          this.usuario = response.usuario;
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });

    // Obtener datos de la reserva
    const reservaPendiente = localStorage.getItem('reservaPendiente');
    if (reservaPendiente) {
      const reserva = JSON.parse(reservaPendiente);
      this.habitacionSeleccionada = reserva.habitacionSeleccionada;
      this.totalReserva = reserva.totalReserva;
      this.fechaInicio = reserva.filtros.fechaInicio;
      this.fechaFin = reserva.filtros.fechaFin;

      localStorage.removeItem('reservaPendiente');
    }
  }

  // Inicializar PayPal después de renderizar la vista
  ngAfterViewInit(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: { value: this.totalReserva.toFixed(2) } // Total de la reserva
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log('Pago exitoso:', details);
          this.pagoConfirmado = true;

          Swal.fire({
            title: '¡Pago exitoso!',
            text: 'Tu pago ha sido confirmado. Ahora puedes completar la reserva.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        });
      },
      onError: (err: any) => {
        console.error('Error en el pago:', err);
        Swal.fire({
          title: 'Error en el pago',
          text: 'No se pudo procesar el pago, intenta de nuevo.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }).render('#paypal-button-container'); 
  }

  confirmarReserva(): void {
    if (!this.pagoConfirmado) {
      Swal.fire({
        title: 'Pago requerido',
        text: 'Por favor, realiza el pago con PayPal antes de confirmar la reserva.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const datosReserva = {
      usuario_id: this.usuario.id,
      habitacion_id: this.habitacionSeleccionada.habitacion_id,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      totalReserva: this.totalReserva
    };

    this.reservaService.reservarConCuenta(datosReserva).subscribe(
      response => {
        Swal.fire({
          title: '¡Reserva Exitosa!',
          text: 'Tu reserva ha sido confirmada correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      error => {
        console.error('Error al reservar:', error);
      }
    );
  }
}

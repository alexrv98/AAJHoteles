import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavusuarioComponent } from '../navusuario/navusuario.component';
import { ReservaService } from '../../services/reserva.service';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


declare var paypal: any;

@Component({
  selector: 'app-reserva-sin-cuenta',
  templateUrl: './reserva-sin-cuenta.component.html',
  imports: [FormsModule, RouterLink, CommonModule, NavusuarioComponent],
  styleUrls: ['./reserva-sin-cuenta.component.css']
})
export class ReservaSinCuentaComponent implements OnInit {
  habitacion: any = null;
  totalReserva: number = 0;
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  tipoHabitacion: string = "";
  capacidad: number = 0;
  camas: number = 0;

  reserva = {
    nombre: '',
    email: '',
    telefono: '',
    habitacion_id: null,
    fechaInicio: '',
    fechaFin: '',
    totalReserva: 0,
    pagoConfirmado: false 
    
  };

  constructor(private reservaService: ReservaService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const habitacion = params['habitacion'];
      const total = params['total'];
      const fechaInicio = params['fechaInicio'];
      const fechaFin = params['fechaFin'];
      const tipo = params['tipo'];
      const capacidad = params['capacidad'];
      const camas = params['camas'];
  
      if (habitacion && total && fechaInicio && fechaFin && tipo && capacidad && camas) {
        this.habitacion = JSON.parse(habitacion);
        this.totalReserva = parseFloat(total);
        this.fechaInicio = new Date(fechaInicio + 'T00:00:00');
        this.fechaFin = new Date(fechaFin + 'T00:00:00');
        this.tipoHabitacion = tipo;
        this.capacidad = capacidad;
        this.camas = camas;
  
        this.reserva.habitacion_id = this.habitacion.habitacion_id; 
        this.reserva.fechaInicio = this.fechaInicio.toISOString().split('T')[0];
        this.reserva.fechaFin = this.fechaFin.toISOString().split('T')[0];
        this.reserva.totalReserva = this.totalReserva;
      }
    });
  }

  // Inicializar el botón de PayPal después de que la vista se renderiza
  ngAfterViewInit(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.totalReserva.toFixed(2) // Monto de la reserva
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log('Pago exitoso:', details);
          this.reserva.pagoConfirmado = true;

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

  confirmarReservaSinCuenta(): void {
    if (!this.reserva.nombre || !this.reserva.email || !this.reserva.telefono) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
  
    if (!this.reserva.pagoConfirmado) {
      Swal.fire({
        title: 'Pago requerido',
        text: 'Por favor, realiza el pago con PayPal antes de confirmar la reserva.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
  
    const emailParams = {
      to_name: this.reserva.nombre,  
      to_email: this.reserva.email,  
      habitacion: `${this.habitacion.numero_habitacion} - ${this.habitacion.tipo_habitacion}`,  
      fechaInicio: this.fechaInicio?.toLocaleDateString(),  
      fechaFin: this.fechaFin?.toLocaleDateString(),  
      totalReserva: this.reserva.totalReserva  
    };
    
    emailjs.send('service_w4h509a', 'template_bbuk6lq', emailParams, 'P_O_qh7Hz8_pXihT8')
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
    
  
    // Guardar la reserva
    this.reservaService.reservarSinCuenta(this.reserva).subscribe(
      response => {
        console.log('Reserva realizada con éxito:', response);
        Swal.fire({
          title: '¡Reserva Exitosa!',
          text: 'Tu reserva ha sido confirmada correctamente. Se te ha enviado un correo con los detalles.',
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

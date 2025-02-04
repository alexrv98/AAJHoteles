import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from '../../../services/comentario.service';
import { AuthService } from '../../../services/auth.service'; // Servicio de autenticación
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavusuarioComponent } from '../../navusuario/navusuario.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavusuarioComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {
  comentarios: any[] = [];
  hotelId: number | null = null;
  calificacion: number = 5;
  comentario: string = '';
  usuarioAutenticado: boolean = false; // Verifica si el usuario está logueado

  constructor(
    private comentarioService: ComentarioService,
    private authService: AuthService, // Servicio de autenticación
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar si el usuario está autenticado
    this.usuarioAutenticado = this.authService.estaAutenticado();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.hotelId = Number(id);
        this.cargarComentarios();
      }
    });
  }

  cargarComentarios() {
    if (this.hotelId) {
      this.comentarioService.getComentarios(this.hotelId).subscribe(
        (data: any) => {
          if (data.status === 'success') {
            this.comentarios = data.data;
          }
        },
        error => {
          console.error('Error al cargar comentarios', error);
        }
      );
    }
  }

  agregarComentario() {
    const token = localStorage.getItem('authToken'); // Obtener el token almacenado

    // Si el usuario no está autenticado, mostrar alerta y evitar agregar comentario
    if (!this.usuarioAutenticado) {
      Swal.fire({
        title: 'Iniciar sesión',
        text: 'Debes iniciar sesión para agregar un comentario.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Iniciar sesión',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
        }
      });
      return;
    }

    // Si el usuario está autenticado, permitir agregar comentario
    if (this.comentario.trim() && this.calificacion >= 1 && this.calificacion <= 5 && this.hotelId) {
      this.comentarioService.agregarComentario(this.hotelId, this.calificacion, this.comentario).subscribe(
        (data: any) => {
          if (data.status === 'success') {
            this.cargarComentarios();
            this.comentario = '';
            this.calificacion = 5;
          }
        },
        error => {
          console.error('Error al agregar comentario', error);
        }
      );
    } else {
      Swal.fire('Error', 'Debe ingresar un comentario y una calificación válida.', 'error');
    }
  }
}

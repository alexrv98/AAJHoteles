import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../../services/comentario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {
  lugares: any[] = [];
  hoteles: any[] = [];
  comentarios: any[] = [];
  lugarId: number | null = null;
  hotelId: number | null = null;
  calificacion: number = 5;
  comentario: string = '';

  constructor(private comentarioService: ComentarioService) {}

  ngOnInit(): void {
    this.cargarLugares();
  }

  cargarLugares() {
    this.comentarioService.getLugares().subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.lugares = data.data;
        }
      },
      error => {
        console.error('Error al obtener lugares', error);
      }
    );
  }

  cargarHoteles() {
    if (this.lugarId) {
      this.comentarioService.getHotelesPorLugar(this.lugarId).subscribe(
        (data: any) => {
          if (data.status === 'success') {
            this.hoteles = data.data;
          }
        },
        error => {
          console.error('Error al obtener hoteles', error);
        }
      );
    }
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
    console.log("Hotel ID:", this.hotelId);
    console.log("Calificación:", this.calificacion);
    console.log("Comentario:", this.comentario);

    if (this.comentario.trim() && this.calificacion >= 1 && this.calificacion <= 5 && this.hotelId) {
      this.comentarioService.agregarComentario(this.hotelId, this.calificacion, this.comentario).subscribe(
        (data: any) => {
          console.log("Respuesta del servidor:", data);
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
      alert('Debe seleccionar un hotel, ingresar un comentario y una calificación válida.');
    }
  }
}

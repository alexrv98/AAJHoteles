import { Component, OnInit } from '@angular/core';
import { TiposHabitacionService } from '../../../services/tipo-habitacion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-tipos-habitacion',
  templateUrl: './tipos-habitacion.component.html',
  imports:[CommonModule,FormsModule,HomeComponent],
  styleUrls: ['./tipos-habitacion.component.css'],
})
export class TiposHabitacionComponent implements OnInit {
  tiposHabitacion: any[] = [];
  mostrarModalAgregar: boolean = false;
  nuevoTipo: any = { nombre: '', capacidad: 0, camas: 0 };
  mostrarModalEditar: boolean = false;
  tipoSeleccionado: any = { id: null, nombre: '', capacidad: 0, camas: 0 };


  constructor(private tiposHabitacionService: TiposHabitacionService) {}

  ngOnInit(): void {
    this.obtenerTiposHabitacion();
  }

  // Método para obtener los tipos de habitación
  obtenerTiposHabitacion(): void {
    this.tiposHabitacionService.obtenerTiposHabitacion().subscribe(
      (response) => {
        if (response.status === 'success') {
          this.tiposHabitacion = response.data;
        } else {
          console.error('Error al obtener los tipos de habitación', response.message);
        }
      },
      (error) => {
        console.error('Error de conexión con la API', error);
      }
    );
  }

  // Método para abrir el modal de agregar
  abrirModalAgregar(): void {
    this.nuevoTipo = { nombre: '', capacidad: 0, camas: 0 };

    this.mostrarModalAgregar = true;
  }

  // Método para cerrar el modal de agregar
  cerrarModalAgregar(): void {
    this.mostrarModalAgregar = false;
  }

  // Método para guardar el nuevo tipo de habitación
  guardarNuevoTipo(form: any): void {
    if (form.valid) {
      this.tiposHabitacionService.agregarTipoHabitacion(this.nuevoTipo).subscribe(
        (response) => {
          if (response.status === 'success') {
            this.obtenerTiposHabitacion(); // Refrescar la lista de tipos de habitación
            this.cerrarModalAgregar(); // Cerrar el modal
            alert('Tipo de habitación agregado correctamente');
          } else {
            alert('Error al agregar el tipo de habitación: ' + response.message);
          }
        },
        (error) => {
          console.error('Error al agregar el tipo de habitación', error);
        }
      );
    }
  }


  abrirModalEditar(tipo: any): void {
    this.tipoSeleccionado = { ...tipo }; // Clonamos el objeto seleccionado
    this.mostrarModalEditar = true;
  }

  // Método para cerrar el modal de editar
  cerrarModalEditar(): void {
    this.mostrarModalEditar = false;
  }

  // Método para guardar los cambios del tipo de habitación editado
  guardarEdicion(): void {
    if (this.tipoSeleccionado.id) {
      this.tiposHabitacionService.editarTipoHabitacion(this.tipoSeleccionado).subscribe(
        (response) => {
          if (response.status === 'success') {
            this.obtenerTiposHabitacion(); // Refrescar la lista de tipos de habitación
            this.cerrarModalEditar(); // Cerrar el modal
            alert('Tipo de habitación actualizado correctamente');
          } else {
            alert('Error al actualizar el tipo de habitación: ' + response.message);
          }
        },
        (error) => {
          console.error('Error al actualizar el tipo de habitación', error);
        }
      );
    }
  }
  eliminarTipoHabitacion(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este tipo de habitación?')) {
      this.tiposHabitacionService.eliminarTipoHabitacion(id).subscribe(
        (response) => {
          if (response.status === 'success') {
            this.obtenerTiposHabitacion(); // Refrescar la lista después de eliminar
            alert('Tipo de habitación eliminado correctamente');
          } else {
            alert('Error al eliminar el tipo de habitación: ' + response.message);
          }
        },
        (error) => {
          console.error('Error al eliminar el tipo de habitación', error);
        }
      );
    }
  }
  
}
import { Component, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresComponent } from '../lugares/lugares.component';
import { AuthService } from '../../services/auth.service';
import { LugaresService } from '../../services/lugares.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [RouterModule, LugaresComponent, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  lugares: any[] = [];
  lugaresFiltrados: any[] = [];
  textoBusqueda: string = ''; // Almacena el texto del input
  lugaresService: LugaresService = inject(LugaresService);

  constructor(private authService: AuthService) {
    this.lugaresService.obtenerLugares().subscribe((data: any[]) => {
      this.lugares = data;
      this.lugaresFiltrados = data;
    });
  }
  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresComponent } from '../lugares/lugares.component';
import { reservationComponent } from '../reservation/reservation.component';

@Component({
  selector: 'app-usuario',
  imports: [RouterModule, LugaresComponent, reservationComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {}

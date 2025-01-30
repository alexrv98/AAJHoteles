import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LugaresComponent } from '../lugares/lugares.component';

@Component({
  selector: 'app-usuario',
  imports: [RouterModule, LugaresComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {}

import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navusuario',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './navusuario.component.html',
  styleUrls: ['./navusuario.component.css'],
})
export class NavusuarioComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Verificar si el usuario está autenticado
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    window.location.reload(); // Recargar la página para actualizar la vista
  }
}

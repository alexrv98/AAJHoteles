import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-navusuario',
  imports: [RouterLink, RouterModule, NavusuarioComponent],
  templateUrl: './navusuario.component.html',
  styleUrl: './navusuario.component.css',
})
export class NavusuarioComponent {
  constructor(private authService: AuthService) {}
  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}

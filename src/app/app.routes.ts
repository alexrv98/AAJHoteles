import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { reservationComponent } from './componentes/reservation/reservation.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: AdministradorComponent,
    canActivate: [AuthGuard],
    title: 'admin',
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuard],
    title: 'usuario',
  },
  {
    path: 'reservacion',
    component: reservationComponent,
    title: 'reservacion',
  },
  { path: 'registro', component: RegistroComponent, title: 'registro' },
];

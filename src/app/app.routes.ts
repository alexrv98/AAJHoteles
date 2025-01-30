import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HotelesComponent } from './componentes/administrador/hoteles/hoteles.component';
import { HabitacionesComponent } from './componentes/administrador/hoteles/habitaciones/habitaciones.component';
import { reservationComponent } from './componentes/usuario/reservation/reservation.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdministradorComponent, canActivate: [AuthGuard], title: 'admin' },
  { path: 'hoteles/:id', component: HotelesComponent, canActivate: [AuthGuard], title: 'hoteles' },
  { path: 'habitaciones/:id', component: HabitacionesComponent, canActivate: [AuthGuard], title: 'habitaciones' },
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard], title: 'usuario' },
  { path: 'registro', component: RegistroComponent, title: 'registro' },
  { path: 'reservacion', component: reservationComponent, title: 'reservación', canActivate: [AuthGuard] },
];

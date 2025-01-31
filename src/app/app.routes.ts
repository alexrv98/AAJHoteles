import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HotelesComponent } from './componentes/administrador/hoteles/hoteles.component';
import { HabitacionesComponent } from './componentes/administrador/hoteles/habitaciones/habitaciones.component';
import { HomeComponent } from './componentes/home/home.component';
import { reservationComponent } from './componentes/usuario/reservation/reservation.component';
import { TiposHabitacionComponent } from './componentes/administrador/tipos-habitacion/tipos-habitacion.component';
import { GestionreservacionesService } from './services/gestionreservaciones.service';
import { GesionReservacionesComponent } from './componentes/administrador/gesion-reservaciones/gesion-reservaciones.component';
import { LugarHotelesComponent } from './componentes/lugar-hoteles/lugar-hoteles.component';
import { ComentariosComponent } from './componentes/usuario/comentarios/comentarios.component';
import { ReservationHabitacionService } from './services/reservation-habitacion.service';
import { ReservationHabitacionesComponent } from './componentes/usuario/reservation-habitacion/reservation-habitacion.component';
import { MisReservasComponent } from './componentes/usuario/misreservas/misreservas.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'comentario',
    component: ComentariosComponent,
    title: 'comentario',
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdministradorComponent,
    canActivate: [AuthGuard],
    title: 'admin',
  },
  {
    path: 'hoteles/:id',
    component: HotelesComponent,
    canActivate: [AuthGuard],
    title: 'hoteles',
  },

  {
    path: 'lugar-hoteles/:id',
    component: LugarHotelesComponent,
    canActivate: [AuthGuard],
    title: 'hoteles',
  },

  {
    path: 'habitaciones/:id',
    component: HabitacionesComponent,
    canActivate: [AuthGuard],
    title: 'habitaciones',
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuard],
    title: 'usuario',
  },
  {
    path: 'misreservas',
    component: MisReservasComponent,
    canActivate: [AuthGuard],
    title: 'misreservas',
  },

  {
    path: 'tipoHabitaciones',
    component: TiposHabitacionComponent,
    canActivate: [AuthGuard],
    title: 'tipoHabitaciones',
  },

  {
    path: 'gestionReservaciones',
    component: GesionReservacionesComponent,
    canActivate: [AuthGuard],
    title: 'gestionReservaciones',
  },

  {
    path: 'habitacionesUsuario/:id',
    component: ReservationHabitacionesComponent,
    canActivate: [AuthGuard],
    title: 'habitacionesUsuario',
  },


  { path: 'registro', component: RegistroComponent, title: 'registro' },
  {
    path: 'reservacion',
    component: reservationComponent,
    title: 'reservación',
    canActivate: [AuthGuard],
  },
];

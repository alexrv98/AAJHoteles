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
import { GesionReservacionesComponent } from './componentes/administrador/gesion-reservaciones/gesion-reservaciones.component';
import { LugarHotelesComponent } from './componentes/lugar-hoteles/lugar-hoteles.component';
import { ComentariosComponent } from './componentes/usuario/comentarios/comentarios.component';
import { ReservationHabitacionesComponent } from './componentes/usuario/reservation-habitacion/reservation-habitacion.component';
import { MisReservasComponent } from './componentes/usuario/misreservas/misreservas.component';
import { ReservaSinCuentaComponent } from './componentes/reserva-sin-cuenta/reserva-sin-cuenta.component';
import { ReservaConCuentaComponent } from './componentes/reserva-con-cuenta/reserva-con-cuenta.component';

export const routes: Routes = [

  { path: '', component: UsuarioComponent, title: 'usuario'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent, title: 'registro' },
  { path: 'reserva-sin-cuenta', component: ReservaSinCuentaComponent },
  { path: 'reserva-con-cuenta', component: ReservaConCuentaComponent },
  {
    path: 'comentario/:id',
    component: ComentariosComponent
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
    title: 'hoteles',
  },

  {
    path: 'habitaciones/:id',
    component: HabitacionesComponent,
    title: 'habitaciones',
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


  {
    path: 'reservacion',
    component: reservationComponent,
    title: 'reservación',
    canActivate: [AuthGuard],
  },
];

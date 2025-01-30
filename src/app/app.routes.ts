import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './componentes/registro/registro.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdministradorComponent, canActivate: [AuthGuard], title:'admin' },
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard], title:'usuario' },
  { path: 'registro', component: RegistroComponent, title:'registro' },

];

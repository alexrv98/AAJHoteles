import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LugaresComponent } from '../lugares/lugares.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterOutlet, LugaresComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

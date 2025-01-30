import { HomeComponent } from './../home/home.component';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lugares',
  imports: [RouterModule],
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css',
})
export class LugaresComponent {}

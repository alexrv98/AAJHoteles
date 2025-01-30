import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lugares } from '../../services/lugares';

@Component({
  selector: 'app-lugares',
  imports: [RouterModule],
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css',
})
export class LugaresComponent {
  @Input() lugares!: Lugares;
}

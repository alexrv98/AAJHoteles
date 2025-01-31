import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, DataTablesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sistemHotelesTrivago';
}

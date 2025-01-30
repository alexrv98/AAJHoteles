import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitacionesService } from '../../../../services/habitaciones.service';

@Component({
  selector: 'app-habitaciones',
  imports: [],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent implements OnInit{
  constructor(private route: ActivatedRoute, private habitacionesService: HabitacionesService) {}
  HotelId!: number;


  ngOnInit(): void {
    
  }
  

  
}

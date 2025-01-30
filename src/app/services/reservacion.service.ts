import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  private apiUrl = 'http://localhost/api/';

  constructor(private http: HttpClient) {}

  // Obtener todos los lugares turísticos
  getLugares(): Observable<any> {
    return this.http.get(`${this.apiUrl}listLugaresTuristicos.php`);
  }

  // Obtener hoteles de un lugar específico
  getHoteles(lugarId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}hoteles.php?lugar_id=${lugarId}`);
  }

  // Obtener habitaciones disponibles en un hotel
  getHabitaciones(hotelId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}habitaciones.php?hotel_id=${hotelId}`);
  }

  // Obtener tipos de habitaciones
  getTiposHabitaciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}tipos_habitacion.php`);
  }

  // Enviar una reservación
  hacerReservacion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}reservaciones.php`, data);
  }
}

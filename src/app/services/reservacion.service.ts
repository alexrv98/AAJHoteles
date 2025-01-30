import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  private apiUrl = 'http://localhost/api';  // Cambia la URL a tu servidor

  constructor(private http: HttpClient) { }

  // Obtener lugares turísticos
  getLugares(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listLugaresTuristicos.php`);
  }

  // Obtener hoteles por lugar_id
  getHoteles(lugar_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listHoteles.php?lugar_id=${lugar_id}`);
  }

  // Obtener habitaciones por hotel_id
  getHabitaciones(hotel_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listHabitaciones.php?hotel_id=${hotel_id}`);
  }

  // Obtener tipos de habitaciones
  getTiposHabitacion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listTipoHabitacion.php`);
  }

  // Hacer una reservación
  hacerReservacion(reservacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservacion.php`, reservacion);
  }
}

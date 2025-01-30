import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  private apiUrl = 'http://localhost/api';  // Cambia la URL a tu servidor

  constructor(private http: HttpClient) { }

  // Crear los encabezados con el token de autenticación
  private crearHeaders() {
    const token = localStorage.getItem('authToken'); // Obtener el token del localStorage
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',  // Si hay token, agregarlo en el encabezado
      'Content-Type': 'application/json' // Otras cabeceras necesarias
    });
  }

  // Obtener lugares turísticos
  getLugares(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listLugaresTuristicos.php`, { headers: this.crearHeaders() });
  }

  // Obtener hoteles por lugar_id
  getHoteles(lugar_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listHoteles.php?lugar_id=${lugar_id}`, { headers: this.crearHeaders() });
  }

  // Obtener habitaciones por hotel_id
  getHabitaciones(hotel_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listHabitaciones.php?hotel_id=${hotel_id}`, { headers: this.crearHeaders() });
  }

  // Obtener tipos de habitaciones
  getTiposHabitacion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listTipoHabitacion.php`, { headers: this.crearHeaders() });
  }

  // Hacer una reservación
  hacerReservacion(reservacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservacion.php`, reservacion, { headers: this.crearHeaders() });
  }
}

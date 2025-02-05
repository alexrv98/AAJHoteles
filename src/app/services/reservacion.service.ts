import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservacionService {
  private apiUrl = 'http://192.168.1.102/HTLES/AAJHoteles/apisHoteles';

  constructor(private http: HttpClient) {}

  private crearHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    console.log('Token enviado:', token);
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    });
  }

  getLugares(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listLugaresTuristicos.php`, {
      headers: this.crearHeaders(),
    });
  }

  getHoteles(lugar_id: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/listHoteles.php?lugar_id=${lugar_id}`,
      { headers: this.crearHeaders() }
    );
  }

  getHabitaciones(hotel_id: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/listHabitaciones.php?hotel_id=${hotel_id}`,
      {
        headers: this.crearHeaders(),
      }
    );
  }

  getTiposHabitacion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listTipoHabitacion.php`, {
      headers: this.crearHeaders(),
    });
  }

  hacerReservacion(reservacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservaciones.php`, reservacion, {
      headers: this.crearHeaders(),
    });
  }

  updateReservacion(reservacion: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/updateReservacion.php/${reservacion.id}`,
      reservacion,
      { headers: this.crearHeaders() }
    );
  }

  eliminarReservacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarReservacion.php/${id}`, {
      headers: this.crearHeaders(),
    });
  }
}

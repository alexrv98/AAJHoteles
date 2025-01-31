import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitacionesService {
  private apiUrl = 'http://192.168.1.102/sistemaExam/api';

  constructor(private http: HttpClient) {}

  getHabitacionesPorHotel(hotelId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(
      `${this.apiUrl}/listHabitaciones.php?hotel_id=${hotelId}`,
      { headers }
    );
  }

  agregarHabitacion(habitacion: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    console.log('Enviando datos a la API:', habitacion);

    return this.http.post<any>(
      `${this.apiUrl}/agregarHabitacion.php`,
      habitacion,
      { headers }
    );
  }

  getTiposHabitacion(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.apiUrl}/obtenerTiposHabitacion.php`, {
      headers,
    });
  }

  editarHabitacion(habitacion: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(
      `${this.apiUrl}/editarHabitacion.php`,
      habitacion,
      { headers }
    );
  }

  eliminarHabitacion(idHabitacion: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.delete<any>(
      `${this.apiUrl}/eliminarHabitacion.php?id=${idHabitacion}`,
      { headers }
    );
  }
  
  
}

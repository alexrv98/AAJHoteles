import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationHabitacionService {

  private apiUrl = 'http://192.168.1.102/HTLES/AAJHoteles/apisHoteles';
  
    constructor(private http: HttpClient) {}
  
    getHabitacionesPorHotel(hotelId: number): Observable<any> {
        const token = localStorage.getItem('authToken');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
        return this.http.get<any>(
          `${this.apiUrl}/listHabitaciones.php?hotel_id=${hotelId}`,
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

  reservarHabitacion(habitacionId: number, fechaInicio: string, fechaFin: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    const body = {
      habitacion_id: habitacionId,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin
    };

    return this.http.post<any>(`${this.apiUrl}/reservarHabitPorHotel.php`, body, { headers });
  }
}

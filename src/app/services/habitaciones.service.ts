import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitacionesService {
  private apiUrl = 'http://192.168.1.111/api';

  constructor(private http: HttpClient) {}

  getHabitacionesPorHotel(hotelId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = { lugar_id: hotelId.toString() };

    return this.http.get(`${this.apiUrl}/listHabitaciones.php`, {
      headers,
      params,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  private apiUrl = 'http://192.168.1.102/HTLES/AAJHoteles/apisHoteles';

  constructor(private http: HttpClient) {}

  obtenerLugares(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listLugaresTuristicos.php`);
  }

  obtenerHotelesDisponibles(filtros: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/buscarHoteles.php`, filtros);
  }

  obtenerHabitacionesDisponibles(
    hotelId: number,
    filtros: any
  ): Observable<any> {
    const params = { hotelId, ...filtros };
    return this.http.post(`${this.apiUrl}/buscarHabitaciones.php`, params);
  }

  // Nuevo método para obtener comentarios de un hotel específico
  obtenerComentarios(hotel_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/comentarios.php?hotel_id=${hotel_id}`);
  }

  //admin

  obtenerLugaById(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get(`${this.apiUrl}/listLugaresTuristicos.php?id=${id}`, {
      headers: headers,
    });
  }

  addLugar(lugar: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(
      `${this.apiUrl}/agregarLugaresTuristicos.php`,
      lugar,
      { headers }
    );
  }

  updateLugar(lugar: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
    return this.http.put<any>(
      `${this.apiUrl}/editLugaresTuristicos.php/${lugar.id}`,
      lugar,
      { headers }
    );
  }

  eliminarLugar(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(
      `${this.apiUrl}/eliminarLugaresTuristicos.php/${id}`,
      { headers }
    );
  }

  agregarLugar(lugar: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(
      `${this.apiUrl}/agregarLugaresTuristicos.php`,
      lugar,
      { headers }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private apiUrl = 'http://192.168.1.73:8080/apisHoteles';

  constructor(private http: HttpClient) {}

  getLugares(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listLugaresTuristicos.php`);
  }

  getHotelesPorLugar(lugar_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listHoteles.php?lugar_id=${lugar_id}`);
  }

  getComentarios(hotel_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/comentarios.php?hotel_id=${hotel_id}`);
  }

  agregarComentario(hotelId: number, calificacion: number, comentario: string): Observable<any> {
    const token = localStorage.getItem('authToken'); 

    if (!token) {
      console.error('No hay token disponible');
      return new Observable(); 
    }

    // Agregar el token en los headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    });

    const body = { hotel_id: hotelId, calificacion, comentario };

    return this.http.post(`${this.apiUrl}/comentarios.php`, body, { headers });
  }
}

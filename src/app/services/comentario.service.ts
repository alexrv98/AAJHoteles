import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private apiUrl = 'http://192.168.1.102/sistemaExam/api';

  constructor(private http: HttpClient) {}

  private crearHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
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

  getHotelesPorLugar(lugar_id: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/listHoteles.php?lugar_id=${lugar_id}`,
      {
        headers: this.crearHeaders(),
      }
    );
  }

  getComentarios(hotel_id: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/comentarios.php?hotel_id=${hotel_id}`,
      {
        headers: this.crearHeaders(),
      }
    );
  }

  agregarComentario(
    hotel_id: number,
    calificacion: number,
    comentario: string
  ): Observable<any> {
    const data = { hotel_id, calificacion, comentario };
    return this.http.post(`${this.apiUrl}/comentarios.php`, data, {
      headers: this.crearHeaders(),
    });
  }
}

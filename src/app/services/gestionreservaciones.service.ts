import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionreservacionesService {
  private apiUrl = 'http://192.168.1.102/HTLES/AAJHoteles/apisHoteles';

  constructor(private http: HttpClient) {}

  obtenerReservaciones(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get(`${this.apiUrl}/listReservaciones.php`, {
      headers,
    });
    
  }

  obtenerReservacionesCompleto(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get(`${this.apiUrl}/listReservacionesCompleto.php`, {
      headers,
    });
  }

  actualizarEstadoReservacion(id: number, estado: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };
    const body = { id, estado };

    return this.http.post(`${this.apiUrl}/editarEstadoReservacion.php`, body, {
      headers,
    });
  }

  obtenerReservacionesUsuario(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get(`${this.apiUrl}/listreservacionesusuario.php`, { headers });
  }
}

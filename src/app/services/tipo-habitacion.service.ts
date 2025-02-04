import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposHabitacionService {
  private apiUrl = 'http://192.168.1.102/HTLES/AAJHoteles/apisHoteles'; 

  constructor(private http: HttpClient) {}

  obtenerTiposHabitacion(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/listTipoHabitacion.php`, { headers });
  }

  agregarTipoHabitacion(tipo: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/agregarTipoHabitacion.php`, tipo, { headers });
  }

  editarTipoHabitacion(tipo: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.put(`${this.apiUrl}/editarTipoHabitacion.php`, tipo, { headers });
  }

  eliminarTipoHabitacion(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.request('DELETE', `${this.apiUrl}/eliminarTipoHabitacion.php`, {
      headers,
      body: { id },
    });
  }
}

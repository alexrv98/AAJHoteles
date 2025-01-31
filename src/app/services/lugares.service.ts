import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  private apiUrl = 'http://localhost/sistemaExam/api';

  constructor(private http: HttpClient) {}

  obtenerLugares(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get(`${this.apiUrl}/listLugaresTuristicos.php`, {
      headers,
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

    // Enviar los datos del nuevo lugar a la API mediante POST
    return this.http.post<any>(
      `${this.apiUrl}/agregarLugaresTuristicos.php`,
      lugar,
      { headers }
    );
  }
}

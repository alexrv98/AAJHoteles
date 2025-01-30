import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  private apiUrl = 'http://localhost/sistemaExam/api'; 

  constructor(private http: HttpClient) {}

  getHotelesPorLugar(lugarId: number): Observable<any> {
    const token = localStorage.getItem('authToken'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = { lugar_id: lugarId.toString() }; 
  
    return this.http.get(`${this.apiUrl}/listHoteles.php`, { headers, params });
  }
  
  addHotel(hotel: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${this.apiUrl}/agregarHotel.php`, hotel, { headers });
  }

  updateHotel(hotel: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put<any>(`${this.apiUrl}/editarHotel.php`, hotel, { headers });
  }


  eliminarHotel(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // La URL debería incluir el ID del hotel en la query
    return this.http.delete<any>(`${this.apiUrl}/eliminarHotel.php?id=${id}`, { headers });
  }
  

  
}

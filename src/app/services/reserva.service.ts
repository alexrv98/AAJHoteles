import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://192.168.1.73:8080/apisHoteles'; // Ajusta la URL de tu API

  constructor(private http: HttpClient) {}

  reservarSinCuenta(datosReserva: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservar_sin_cuenta.php`, datosReserva);
  }

  reservarConCuenta(datosReserva: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservar_con_cuenta.php`, datosReserva);
  }
}

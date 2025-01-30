import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/api/';

  constructor(private http: HttpClient) { }

  login(correo: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login.php`, { correo, password });
  }

  saveToken(token: string, role: string, name: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', name);

  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('Username');

  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register.php`, data);
  }


  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }


}

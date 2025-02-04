import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://192.168.1.102/HTLES/AAJHoteles/apisHoteles';
  constructor(private http: HttpClient) {}

  login(correo: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login.php`, { correo, password });
  }

  getUserData(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return new Observable(observer => {
        observer.error('Usuario no autenticado');
      });
    }
    return this.http.get(`${this.apiUrl}/usuario.php`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
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
    localStorage.removeItem('username');
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register.php`, data);
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
  estaAutenticado(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Retorna true si el token existe, de lo contrario false

  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Retorna true si el token existe, de lo contrario false
  }

  
}

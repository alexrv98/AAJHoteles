import { Injectable } from '@angular/core';
import { Lugares } from './lugares';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  constructor(private http: HttpClient) {}

  url = 'http://192.168.1.111/api/listLugaresTuristicos.php';

  async getAllLugares(): Promise<Lugares[]> {
    const data = await fetch(this.url);
    return await data.json();
  }

  async getLugaresById(id: number): Promise<Lugares | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}

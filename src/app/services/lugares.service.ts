import { Injectable } from '@angular/core';
import { Lugares } from './lugares';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  constructor() {}

  url = '';

  async getAllLugares(): Promise<Lugares[]> {
    const data = await fetch(this.url);
    return await data.json();
  }

  async getLugaresById(id: number): Promise<Lugares | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}

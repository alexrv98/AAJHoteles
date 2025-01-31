import { TestBed } from '@angular/core/testing';

import { GestionreservacionesService } from './gestionreservaciones.service';

describe('GestionreservacionesService', () => {
  let service: GestionreservacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionreservacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

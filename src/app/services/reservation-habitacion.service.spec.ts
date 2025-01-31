import { TestBed } from '@angular/core/testing';

import { ReservationHabitacionService } from './reservation-habitacion.service';

describe('ReservationHabitacionService', () => {
  let service: ReservationHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

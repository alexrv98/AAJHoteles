import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHabitacionComponent } from './reservation-habitacion.component';

describe('ReservationHabitacionComponent', () => {
  let component: ReservationHabitacionComponent;
  let fixture: ComponentFixture<ReservationHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationHabitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

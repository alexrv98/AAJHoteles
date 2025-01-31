import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesionReservacionesComponent } from './gesion-reservaciones.component';

describe('GesionReservacionesComponent', () => {
  let component: GesionReservacionesComponent;
  let fixture: ComponentFixture<GesionReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GesionReservacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GesionReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

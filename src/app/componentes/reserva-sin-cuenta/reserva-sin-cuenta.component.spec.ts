import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaSinCuentaComponent } from './reserva-sin-cuenta.component';

describe('ReservaSinCuentaComponent', () => {
  let component: ReservaSinCuentaComponent;
  let fixture: ComponentFixture<ReservaSinCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaSinCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaSinCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

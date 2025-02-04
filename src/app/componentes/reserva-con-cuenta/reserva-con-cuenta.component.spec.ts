import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaConCuentaComponent } from './reserva-con-cuenta.component';

describe('ReservaConCuentaComponent', () => {
  let component: ReservaConCuentaComponent;
  let fixture: ComponentFixture<ReservaConCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaConCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaConCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

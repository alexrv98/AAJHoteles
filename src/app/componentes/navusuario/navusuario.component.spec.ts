import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavusuarioComponent } from './navusuario.component';

describe('NavusuarioComponent', () => {
  let component: NavusuarioComponent;
  let fixture: ComponentFixture<NavusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

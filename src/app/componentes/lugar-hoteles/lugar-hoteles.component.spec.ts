import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarHotelesComponent } from './lugar-hoteles.component';

describe('LugarHotelesComponent', () => {
  let component: LugarHotelesComponent;
  let fixture: ComponentFixture<LugarHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarHotelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

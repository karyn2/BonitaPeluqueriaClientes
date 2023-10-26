import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavadosCaballeroComponent } from './lavados-caballero.component';

describe('LavadosCaballeroComponent', () => {
  let component: LavadosCaballeroComponent;
  let fixture: ComponentFixture<LavadosCaballeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavadosCaballeroComponent]
    });
    fixture = TestBed.createComponent(LavadosCaballeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

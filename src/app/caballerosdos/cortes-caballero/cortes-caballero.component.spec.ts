import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortesCaballeroComponent } from './cortes-caballero.component';

describe('CortesCaballeroComponent', () => {
  let component: CortesCaballeroComponent;
  let fixture: ComponentFixture<CortesCaballeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CortesCaballeroComponent]
    });
    fixture = TestBed.createComponent(CortesCaballeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

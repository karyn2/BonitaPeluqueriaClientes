import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavadoComponent } from './lavado.component';

describe('LavadoComponent', () => {
  let component: LavadoComponent;
  let fixture: ComponentFixture<LavadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavadoComponent]
    });
    fixture = TestBed.createComponent(LavadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

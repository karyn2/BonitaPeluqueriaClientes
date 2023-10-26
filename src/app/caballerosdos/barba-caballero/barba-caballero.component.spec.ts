import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbaCaballeroComponent } from './barba-caballero.component';

describe('BarbaCaballeroComponent', () => {
  let component: BarbaCaballeroComponent;
  let fixture: ComponentFixture<BarbaCaballeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbaCaballeroComponent]
    });
    fixture = TestBed.createComponent(BarbaCaballeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeinadosComponent } from './peinados.component';

describe('PeinadosComponent', () => {
  let component: PeinadosComponent;
  let fixture: ComponentFixture<PeinadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeinadosComponent]
    });
    fixture = TestBed.createComponent(PeinadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

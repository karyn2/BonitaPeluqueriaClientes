import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaballeroComponent } from './main-caballero.component';

describe('MainCaballeroComponent', () => {
  let component: MainCaballeroComponent;
  let fixture: ComponentFixture<MainCaballeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCaballeroComponent]
    });
    fixture = TestBed.createComponent(MainCaballeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

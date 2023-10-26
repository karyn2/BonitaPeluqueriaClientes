import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxExtraComponent } from './aux-extra.component';

describe('AuxExtraComponent', () => {
  let component: AuxExtraComponent;
  let fixture: ComponentFixture<AuxExtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxExtraComponent]
    });
    fixture = TestBed.createComponent(AuxExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

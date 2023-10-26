import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCaballerosComponent } from './inicio-caballeros.component';

describe('InicioCaballerosComponent', () => {
  let component: InicioCaballerosComponent;
  let fixture: ComponentFixture<InicioCaballerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioCaballerosComponent]
    });
    fixture = TestBed.createComponent(InicioCaballerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

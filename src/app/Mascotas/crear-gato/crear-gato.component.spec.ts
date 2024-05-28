import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGatoComponent } from './crear-gato.component';

describe('CrearGatoComponent', () => {
  let component: CrearGatoComponent;
  let fixture: ComponentFixture<CrearGatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearGatoComponent]
    });
    fixture = TestBed.createComponent(CrearGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarGatoComponent } from './modificar-gato.component';

describe('ModificarGatoComponent', () => {
  let component: ModificarGatoComponent;
  let fixture: ComponentFixture<ModificarGatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarGatoComponent]
    });
    fixture = TestBed.createComponent(ModificarGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisMascotasComponent } from './ver-mis-mascotas.component';

describe('VerMisMascotasComponent', () => {
  let component: VerMisMascotasComponent;
  let fixture: ComponentFixture<VerMisMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerMisMascotasComponent]
    });
    fixture = TestBed.createComponent(VerMisMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

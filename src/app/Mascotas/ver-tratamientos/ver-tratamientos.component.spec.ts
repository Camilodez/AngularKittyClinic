import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTratamientosComponent } from './ver-tratamientos.component';

describe('VerTratamientosComponent', () => {
  let component: VerTratamientosComponent;
  let fixture: ComponentFixture<VerTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerTratamientosComponent]
    });
    fixture = TestBed.createComponent(VerTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

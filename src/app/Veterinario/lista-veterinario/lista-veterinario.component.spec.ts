import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVeterinarioComponent } from './lista-veterinario.component';

describe('ListaVeterinarioComponent', () => {
  let component: ListaVeterinarioComponent;
  let fixture: ComponentFixture<ListaVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVeterinarioComponent]
    });
    fixture = TestBed.createComponent(ListaVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

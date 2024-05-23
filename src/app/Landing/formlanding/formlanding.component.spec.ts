import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlandingComponent } from './formlanding.component';

describe('FormlandingComponent', () => {
  let component: FormlandingComponent;
  let fixture: ComponentFixture<FormlandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlandingComponent]
    });
    fixture = TestBed.createComponent(FormlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

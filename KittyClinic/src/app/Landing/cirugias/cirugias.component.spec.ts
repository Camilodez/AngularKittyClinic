import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiasComponent } from './cirugias.component';

describe('CirugiasComponent', () => {
  let component: CirugiasComponent;
  let fixture: ComponentFixture<CirugiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirugiasComponent]
    });
    fixture = TestBed.createComponent(CirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

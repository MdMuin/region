import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageEuComponent } from './landing-page-eu.component';

describe('LandingPageEuComponent', () => {
  let component: LandingPageEuComponent;
  let fixture: ComponentFixture<LandingPageEuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageEuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

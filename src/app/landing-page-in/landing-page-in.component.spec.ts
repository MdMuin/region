import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageInComponent } from './landing-page-in.component';

describe('LandingPageUsComponent', () => {
  let component: LandingPageInComponent;
  let fixture: ComponentFixture<LandingPageInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

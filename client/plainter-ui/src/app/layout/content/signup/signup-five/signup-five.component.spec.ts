import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFiveComponent } from './signup-five.component';

describe('SignupFiveComponent', () => {
  let component: SignupFiveComponent;
  let fixture: ComponentFixture<SignupFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

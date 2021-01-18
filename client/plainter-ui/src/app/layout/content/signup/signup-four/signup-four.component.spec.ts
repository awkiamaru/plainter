import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFourComponent } from './signup-four.component';

describe('SignupFourComponent', () => {
  let component: SignupFourComponent;
  let fixture: ComponentFixture<SignupFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

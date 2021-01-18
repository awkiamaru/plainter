import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupThreeComponent } from './signup-three.component';

describe('SignupThreeComponent', () => {
  let component: SignupThreeComponent;
  let fixture: ComponentFixture<SignupThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

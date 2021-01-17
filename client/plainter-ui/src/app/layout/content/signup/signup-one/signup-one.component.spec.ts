import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOneComponent } from './signup-one.component';

describe('SignupOneComponent', () => {
  let component: SignupOneComponent;
  let fixture: ComponentFixture<SignupOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignTwoComponent } from './sign-two.component';

describe('SignTwoComponent', () => {
  let component: SignTwoComponent;
  let fixture: ComponentFixture<SignTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileBottomComponent } from './header-mobile-bottom.component';

describe('HeaderMobileBottomComponent', () => {
  let component: HeaderMobileBottomComponent;
  let fixture: ComponentFixture<HeaderMobileBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMobileBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMobileBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveTwoComponent } from './objective-two.component';

describe('ObjectiveTwoComponent', () => {
  let component: ObjectiveTwoComponent;
  let fixture: ComponentFixture<ObjectiveTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

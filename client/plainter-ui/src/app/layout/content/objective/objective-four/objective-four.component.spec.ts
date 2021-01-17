import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveFourComponent } from './objective-four.component';

describe('ObjectiveFourComponent', () => {
  let component: ObjectiveFourComponent;
  let fixture: ComponentFixture<ObjectiveFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

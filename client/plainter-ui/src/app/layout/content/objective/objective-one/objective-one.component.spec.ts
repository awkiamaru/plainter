import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveOneComponent } from './objective-one.component';

describe('ObjectiveOneComponent', () => {
  let component: ObjectiveOneComponent;
  let fixture: ComponentFixture<ObjectiveOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

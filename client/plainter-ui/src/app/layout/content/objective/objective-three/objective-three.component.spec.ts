import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveThreeComponent } from './objective-three.component';

describe('ObjectiveThreeComponent', () => {
  let component: ObjectiveThreeComponent;
  let fixture: ComponentFixture<ObjectiveThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

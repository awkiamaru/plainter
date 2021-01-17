import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiComponent } from './objecti.component';

describe('ObjectiComponent', () => {
  let component: ObjectiComponent;
  let fixture: ComponentFixture<ObjectiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

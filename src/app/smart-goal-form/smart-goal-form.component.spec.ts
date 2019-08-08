import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGoalFormComponent } from './smart-goal-form.component';

describe('SmartGoalFormComponent', () => {
  let component: SmartGoalFormComponent;
  let fixture: ComponentFixture<SmartGoalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartGoalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

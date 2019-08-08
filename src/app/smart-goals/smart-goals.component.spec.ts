import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGoalsComponent } from './smart-goals.component';

describe('SmartGoalsComponent', () => {
  let component: SmartGoalsComponent;
  let fixture: ComponentFixture<SmartGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

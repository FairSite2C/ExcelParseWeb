import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepGoalsComponent } from './rep-goals.component';

describe('RepGoalsComponent', () => {
  let component: RepGoalsComponent;
  let fixture: ComponentFixture<RepGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

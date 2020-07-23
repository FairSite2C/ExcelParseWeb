import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalGoalsComponent } from './national-goals.component';

describe('NationalGoalsComponent', () => {
  let component: NationalGoalsComponent;
  let fixture: ComponentFixture<NationalGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

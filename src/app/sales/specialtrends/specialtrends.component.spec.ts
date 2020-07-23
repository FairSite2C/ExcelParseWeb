import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtrendsComponent } from './specialtrends.component';

describe('SpecialtrendsComponent', () => {
  let component: SpecialtrendsComponent;
  let fixture: ComponentFixture<SpecialtrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

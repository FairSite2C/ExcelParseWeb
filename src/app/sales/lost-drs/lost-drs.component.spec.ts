import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostDRsComponent } from './lost-drs.component';

describe('LostDRsComponent', () => {
  let component: LostDRsComponent;
  let fixture: ComponentFixture<LostDRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostDRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostDRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

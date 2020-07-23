import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDRsComponent } from './new-drs.component';

describe('NewDRsComponent', () => {
  let component: NewDRsComponent;
  let fixture: ComponentFixture<NewDRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

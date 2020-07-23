import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDRsComponent } from './top-drs.component';

describe('TopDRsComponent', () => {
  let component: TopDRsComponent;
  let fixture: ComponentFixture<TopDRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

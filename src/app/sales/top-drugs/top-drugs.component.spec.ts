import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDrugsComponent } from './top-drugs.component';

describe('TopDrugsComponent', () => {
  let component: TopDrugsComponent;
  let fixture: ComponentFixture<TopDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

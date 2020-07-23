import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsalesComponent } from './uploadsales.component';

describe('UploadsalesComponent', () => {
  let component: UploadsalesComponent;
  let fixture: ComponentFixture<UploadsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

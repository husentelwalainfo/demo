import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsUsingHttpComponent } from './employee-details-using-http.component';

describe('EmployeeDetailsUsingHttpComponent', () => {
  let component: EmployeeDetailsUsingHttpComponent;
  let fixture: ComponentFixture<EmployeeDetailsUsingHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsUsingHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsUsingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

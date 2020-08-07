import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListingUsingHttpComponent } from './employee-listing-using-http.component';

describe('EmployeeListingUsingHttpComponent', () => {
  let component: EmployeeListingUsingHttpComponent;
  let fixture: ComponentFixture<EmployeeListingUsingHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListingUsingHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListingUsingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

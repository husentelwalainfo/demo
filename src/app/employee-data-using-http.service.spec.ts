import { TestBed } from '@angular/core/testing';

import { EmployeeDataUsingHttpService } from './employee-data-using-http.service';

describe('EmployeeDataUsingHttpService', () => {
  let service: EmployeeDataUsingHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDataUsingHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

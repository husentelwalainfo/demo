import { Component, OnInit } from '@angular/core';
import { EmployeeDataUsingHttpService } from '../employee-data-using-http.service';

@Component({
  selector: 'app-employee-listing-using-http',
  templateUrl: './employee-listing-using-http.component.html',
  styleUrls: ['./employee-listing-using-http.component.css']
})
export class EmployeeListingUsingHttpComponent implements OnInit {

  public employees = [];
  constructor(private employeeService: EmployeeDataUsingHttpService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }
}

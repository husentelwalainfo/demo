import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {
  public employees = [];
  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}

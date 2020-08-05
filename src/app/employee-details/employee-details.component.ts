import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = []
  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

}

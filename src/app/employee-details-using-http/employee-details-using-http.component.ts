import { Component, OnInit } from '@angular/core';
import { EmployeeDataUsingHttpService } from '../employee-data-using-http.service';

@Component({
  selector: 'app-employee-details-using-http',
  templateUrl: './employee-details-using-http.component.html',
  styleUrls: ['./employee-details-using-http.component.css']
})
export class EmployeeDetailsUsingHttpComponent implements OnInit {

  public employees = []
  constructor(private employeeService: EmployeeDataUsingHttpService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data=>this.employees=data);
  }

}

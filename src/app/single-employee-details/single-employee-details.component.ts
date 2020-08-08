import { Component, OnInit } from '@angular/core';
import { EmployeeDataUsingHttpService } from '../employee-data-using-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-employee-details',
  templateUrl: './single-employee-details.component.html',
  styleUrls: ['./single-employee-details.component.css']
})
export class SingleEmployeeDetailsComponent implements OnInit {
  public employeeid;
  public employees = []
  constructor(private employeeService: EmployeeDataUsingHttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data=>this.employees=data);
    this.employeeid = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

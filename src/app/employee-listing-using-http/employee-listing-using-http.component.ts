import { Component, OnInit } from '@angular/core';
import { EmployeeDataUsingHttpService } from '../employee-data-using-http.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-listing-using-http',
  templateUrl: './employee-listing-using-http.component.html',
  styleUrls: ['./employee-listing-using-http.component.css']
})
export class EmployeeListingUsingHttpComponent implements OnInit {

  public employees = [];
  public error;
  constructor(private employeeService: EmployeeDataUsingHttpService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data, error=> this.error = error);
  }
  selectedEmployee(id) {
    this.router.navigate([id], {relativeTo: this.activatedroute});
  }
}

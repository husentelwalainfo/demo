import { Component, OnInit } from '@angular/core';
import { EmployeeDataUsingHttpService } from '../employee-data-using-http.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-employee-details',
  templateUrl: './single-employee-details.component.html',
  styleUrls: ['./single-employee-details.component.css']
})
export class SingleEmployeeDetailsComponent implements OnInit {
  public employeeid;
  public employees = []
  constructor(private employeeService: EmployeeDataUsingHttpService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data=>this.employees=data);
    //this.employeeid = parseInt(this.activatedroute.snapshot.paramMap.get('id'));
    //console.log('on init');
    this.activatedroute.paramMap.subscribe((params:ParamMap)=> {
      this.employeeid = parseInt(params.get('id'));
    })
  }

  next() {
    this.router.navigate(['../', this.employeeid + 1], {relativeTo: this.activatedroute})
  }

  previous() {
    this.router.navigate(['../', this.employeeid - 1], {relativeTo: this.activatedroute})
  }

}

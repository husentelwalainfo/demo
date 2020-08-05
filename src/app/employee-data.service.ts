import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  constructor() { }
  getEmployees() {
    return [
      { id:"1", employee_name:"Employee 1", age: 30, gender: "Male"},
      { id:"2", employee_name:"Employee 2", age: 30, gender: "Female"},
      { id:"3", employee_name:"Employee 3", age: 25, gender: "Female"},
      { id:"4", employee_name:"Employee 4", age: 30, gender: "Male"},
      { id:"5", employee_name:"Employee 5", age: 28, gender: "Male"},
    ]
  }
}

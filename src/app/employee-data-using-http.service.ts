import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeType } from './employeetype';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataUsingHttpService {
  constructor(private http: HttpClient) { }
  private url = "./assets/employees.json";
  getEmployees() : Observable<EmployeeType[]>{
    return this.http.get<EmployeeType[]>(this.url); 
  }
}

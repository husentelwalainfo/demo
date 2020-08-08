import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { EmployeeType } from './employeetype';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataUsingHttpService {
  constructor(private http: HttpClient) { }
  private url = "./assets/employees.json";
  getEmployees() : Observable<EmployeeType[]>{
    return this.http.get<EmployeeType[]>(this.url).pipe(catchError(this.cstErrorHandling));
  }
  cstErrorHandling(error: HttpErrorResponse){
    return throwError(error.message);
  }
}

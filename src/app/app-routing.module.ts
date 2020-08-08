import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListingUsingHttpComponent } from './employee-listing-using-http/employee-listing-using-http.component';
import { EmployeeDetailsUsingHttpComponent } from './employee-details-using-http/employee-details-using-http.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleEmployeeDetailsComponent } from './single-employee-details/single-employee-details.component';


const routes: Routes = [
  { path:'', redirectTo:'/employeelisting', pathMatch:'full'},
  { path:'employeelisting', component: EmployeeListingUsingHttpComponent},
  { path:'singleemployeedetails/:id', component: SingleEmployeeDetailsComponent},
  { path:'employeedetails', component: EmployeeDetailsUsingHttpComponent},
  { path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

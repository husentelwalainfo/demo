import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CreditCardOfferAvailableDirective } from './credit-card-offer-available.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDataService } from './employee-data.service';
import { EmployeeListingUsingHttpComponent } from './employee-listing-using-http/employee-listing-using-http.component';
import { EmployeeDetailsUsingHttpComponent } from './employee-details-using-http/employee-details-using-http.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleEmployeeDetailsComponent } from './single-employee-details/single-employee-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    InterpolationComponent,
    CreditCardOfferAvailableDirective,
    CustomDirectiveComponent,
    AngularDirectiveComponent,
    EmployeeListingComponent,
    EmployeeDetailsComponent,
    EmployeeListingUsingHttpComponent,
    EmployeeDetailsUsingHttpComponent,
    LayoutComponent,
    PageNotFoundComponent,
    SingleEmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

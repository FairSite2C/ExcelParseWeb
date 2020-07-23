
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { ChartsModule } from "ng2-charts/ng2-charts";
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './sales/dashboard/dashboard.component';
import { SpecialtrendsComponent } from './sales/specialtrends/specialtrends.component';
import { TrackerComponent} from '../app/sales/tracker/tracker.component';
import { TopDrugsComponent } from './sales/top-drugs/top-drugs.component';
import { TopDRsComponent } from './sales/top-drs/top-drs.component';
import { TopCompaniesComponent } from './sales/top-companies/top-companies.component';
import { TopCitiesComponent } from './sales/top-cities/top-cities.component';
import { RepGoalsComponent } from './sales/rep-goals/rep-goals.component';
import { NationalGoalsComponent } from './sales/national-goals/national-goals.component';
import { LostDRsComponent } from './sales/lost-drs/lost-drs.component';
import { OutcomesComponent } from './resources/outcomes/outcomes.component';
import { NewDRsComponent } from './sales/new-drs/new-drs.component';
import { TopStatesComponent } from './sales/top-states/top-states.component';
import { PersonMapComponent } from './api-components/person-map/person-map.component';
// import { RepdrsComponent } from './sales/repdrs/repdrs.component';
// import { EmployeesComponent } from './sales/employee/employees.component';
// import { EmployeeComponent } from './sales/employee/employee/employee.component';
//import { EmployeeService } from './shared/employee.service';
//import { DepartmentService } from './shared/department.service';
import {RequestInterceptor} from './api-request.interceptor';

const appRoutes: Routes = [
  {path:'resources/outcomes', component: OutcomesComponent},
  {path:'sales/dashboard', component: DashboardComponent},
  {path: 'sales/tracker', component: TrackerComponent},
  {path: 'sales/lost-drs', component: LostDRsComponent},
  {path: 'sales/national-goals', component: NationalGoalsComponent},
  {path: 'sales/new-drs', component: NewDRsComponent},
  {path: 'sales/rep-goals', component: RepGoalsComponent},
  {path: 'sales/specialtrends', component: SpecialtrendsComponent},
  {path: 'sales/top-cities', component: TopCitiesComponent},
  {path: 'sales/top-companies', component: TopCompaniesComponent},
  {path: 'sales/top-drs', component: TopDRsComponent},
  {path: 'sales/top-drugs/', component: TopDrugsComponent},
  {path: 'sales/top-states', component: TopStatesComponent},
  {path: 'api-components/person-map', component: PersonMapComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    DashboardComponent,
    LostDRsComponent,
    TopStatesComponent,
    SpecialtrendsComponent,
    TrackerComponent,
    TopDrugsComponent,
    TopStatesComponent,
    TopDRsComponent,
    RepGoalsComponent,
    NationalGoalsComponent,
    OutcomesComponent,
    NewDRsComponent,
    TopStatesComponent,
    TopCitiesComponent,
    TopCompaniesComponent,
    PersonMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


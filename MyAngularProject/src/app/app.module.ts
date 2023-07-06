import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './employee/employee-view.component';
import { EmployeeCreateComponent } from './employee/employee-create.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { StudentAddComponent } from './student/student-add.component';
import { StudentViewComponent } from './student/student-view.component';
import { StudentSearchComponent } from './student/student-search.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
const myroutes:Routes = [
  { path: 'employeeview', component: EmployeeViewComponent },
  { path: 'employeecreate', component: EmployeeCreateComponent },
  { path: 'studentadd', component: StudentAddComponent },
  { path: 'studentview', component: StudentViewComponent },
  { path: 'studentsearch', component: StudentSearchComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    EmployeeCreateComponent,
    StudentAddComponent,
    StudentViewComponent,
    StudentSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

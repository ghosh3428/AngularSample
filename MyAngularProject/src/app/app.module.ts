import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './employee/employee-view.component';
import { EmployeeCreateComponent } from './employee/employee-create.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';


const myroutes:Routes = [
  { path: 'view', component: EmployeeViewComponent },
  { path: 'create', component: EmployeeCreateComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

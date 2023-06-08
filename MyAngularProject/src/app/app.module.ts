import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeViewComponent } from './employee/employee-view.component';
import { EmployeeCreateComponent } from './employee/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

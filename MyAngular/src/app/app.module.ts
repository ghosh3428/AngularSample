import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student/student-add.component';
import { StudentViewComponent } from './student/student-view.component';
import { StudentSearchComponent } from './student/student-search.component';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './service/studenservice';


const myroutes:Routes = [
  {path:"add" , component:StudentAddComponent},
  {path:"search" , component:StudentSearchComponent},
  {path:"view" , component:StudentViewComponent},
  {path:"" , component:StudentViewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentViewComponent,
    StudentSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

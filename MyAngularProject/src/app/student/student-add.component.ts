import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  firstName?:string ;
  lastName?:string ;
  rollNumber?:string;
  email?:string;
  phone?:string;
  gender?:string = "male";
  student_class?:string|null = null;
  student_section?:string|null=null;

  saveStudent(studentForm:NgForm): void {
    console.log(studentForm);
  }
}

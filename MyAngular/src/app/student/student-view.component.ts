import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/studenservice';
import { IStudentModel } from '../model/IStudentModel';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit
{

  students!: IStudentModel[];
  constructor(private _ss: StudentService) { }

  ngOnInit(): void 
  {
    this._ss.getStudents().subscribe(
      (studentlist) => this.students = studentlist,
      (err) =>console.log(err)
    );
  }
}

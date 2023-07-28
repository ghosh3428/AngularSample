import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/studenservice';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudentModel } from '../model/IStudentModel';

@Component({
  selector: 'app-view-single-student',
  templateUrl: './view-single-student.component.html',
  styleUrls: ['./view-single-student.component.css']
})
export class ViewSingleStudentComponent implements OnInit
{
    rollNumber!: number;
    firstName!: string;
    lastName!: string;
    studentClass!: string;
    section!: string;
    maths!: number;
    science!: number;
    english!: number;
    computer!: number;
    sst!: number;
    total!: number;
    average!: number;
    grade!: string;

  constructor(private _ss: StudentService, private route: ActivatedRoute , private router: Router) 
  {
  }
  ngOnInit(): void 
  {
    this.route.paramMap.subscribe(params => {
      const studentId = Number(params.get('id'));
      if (studentId) {
        this.getStudent(studentId);
      }
    });
  }

  getStudent(id: number) {
    this._ss.getStudent(id)
      .subscribe(
          (student: IStudentModel) => this.setStudent(student),
        (err: any) => console.log(err)
      );
  }

  setStudent(student: IStudentModel) 
  {
    this.average = student.average;
    this.computer = student.computer;
    this.english = student.english;
    this.firstName = student.firstName;
    this.grade = student.grade;
    this.lastName = student.lastName;
    this.maths = student.maths;
    this.rollNumber = student.rollNumber;
    this.science = student.science;
    this.section = student.section;
    this.sst = student.sst;
    this.studentClass = student.studentClass;
    this.total = student.total;
  
}

}

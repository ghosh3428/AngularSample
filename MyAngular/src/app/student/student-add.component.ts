import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { StudentService } from '../service/studenservice';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudentModel } from '../model/IStudentModel';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentForm !: FormGroup;

  constructor(private fb: FormBuilder ,private _ss: StudentService, private route: ActivatedRoute) 
  {
  }
  ngOnInit(): void {
    this.studentForm = this.fb.group(
      {
        rollNumber: [],
        firstName: [],
        lastName: [],
        studentClass: [],
        section: [],
        maths: [],
        science: [],
        english: [],
        computer: [],
        sst: [],
        total: [],
        average: [],
        grade: []
      }
    )

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
        (student: IStudentModel) => this.editStudent(student),
        (err: any) => console.log(err)
      );
  }

  editStudent(student: IStudentModel) 
  {
    this.studentForm.setValue(
      {
        rollNumber: student.rollNumber,
        firstName: student.firstName,
        lastName: student.lastName,
        studentClass: student.studentClass,
        section: student.section,
        maths: student.maths,
        science: student.science,
        english: student.english,
        computer: student.computer,
        sst: student.sst,
        total: student.total,
        average: student.average,
        grade: student.grade
      }
    )
  }

}

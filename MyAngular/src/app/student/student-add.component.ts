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

  studentmodel! : IStudentModel;

  pageTitle!: string;

  constructor(private fb: FormBuilder ,private _ss: StudentService, private route: ActivatedRoute , private router: Router) 
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
        this.pageTitle = 'Edit Student';
        this.getStudent(studentId);
      }
      else
      {
        this.pageTitle = 'Add Student';
        this.studentmodel = {
          id: null,
          average : 0,
          computer : 0,
          english : 0,
          firstName : '',
          science : 0,
          grade :'',
          lastName:'',
          maths :0,
          rollNumber:0,
          section:'',
          sst :0,
          studentClass:'',
          total:0

        }
      }
    });
  }
  getStudent(id: number) {
    this._ss.getStudent(id)
      .subscribe(
        (student: IStudentModel) => {
          this.studentmodel = student;
          this.editStudent(student);

        },
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


  savebuttonclick(): void 
  {
    this.mapStudentFormValuesToStudentModel();

    if (this.studentmodel.id) {
    this._ss.updateStudent(this.studentmodel).subscribe(
      () => this.router.navigate(['view']),
      (err: any) => console.log(err)
    );
    }
    else
    {
      this._ss.addStudent(this.studentmodel).subscribe(
        () => this.router.navigate(['view']),
        (err: any) => console.log(err)
      );
    }

  }

  mapStudentFormValuesToStudentModel()
  {
    this.studentmodel.computer = this.studentForm.value.computer;
    this.studentmodel.english = this.studentForm.value.english;
    this.studentmodel.firstName = this.studentForm.value.firstName;
    this.studentmodel.lastName =  this.studentForm.value.lastName;
    this.studentmodel.maths =  this.studentForm.value.maths;
    this.studentmodel.rollNumber= this.studentForm.value.rollNumber;
    this.studentmodel.science = this.studentForm.value.science;
    this.studentmodel.section= this.studentForm.value.section;
    this.studentmodel.sst = this.studentForm.value.sst;
    this.studentmodel.studentClass  = this.studentForm.value.studentClass;

    this.calculateStudentModel();
  }


  calculateStudentModel()
  {
    this.studentmodel.total = this.studentmodel.computer + this.studentmodel.sst +this.studentmodel.science +this.studentmodel.maths +this.studentmodel.english;
    this.studentmodel.average = this.studentmodel.total / 5;
    if(this.studentmodel.average > 85.00)
    {
      this.studentmodel.grade ="A";
    }
    else if(this.studentmodel.average > 70.00)
    {
      this.studentmodel.grade ="B";
    }
    else if(this.studentmodel.average > 60.00)
    {
      this.studentmodel.grade ="C";
    }
    else if(this.studentmodel.average > 40.00)
    {
      this.studentmodel.grade ="D";
    }
    else
    {
      this.studentmodel.grade ="FAIL";
    }
  }

}

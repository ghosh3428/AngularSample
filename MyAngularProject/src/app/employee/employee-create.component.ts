import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employe';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit
{
  
  employeeForm!: FormGroup;


  construct()
  {
    this.employeeForm = new FormGroup(
      {
          employeeId : new FormControl(),
          firstName : new FormControl(),
          lastName : new FormControl(),
          salary : new FormControl(),
          department : new FormGroup(
            {
              departmentId : new FormControl(),
              departmentName : new FormControl(),
              location : new FormControl()
            }
          )
      }
    )
  }

  ngOnInit(): void 
  {
    this.employeeForm = new FormGroup(
      {
          employeeId : new FormControl(),
          firstName : new FormControl(),
          lastName : new FormControl(),
          salary : new FormControl(),
          department : new FormGroup(
            {
              departmentId : new FormControl(),
              departmentName : new FormControl(),
              location : new FormControl()
            }
          )
      }
    )
  }





}

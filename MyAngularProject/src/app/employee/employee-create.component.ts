import { Component } from '@angular/core';
import { Employee } from '../Model/Employe';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent 
{
  employee:Employee[] = [
    {
      firstName : "Rohan",
      lastName : "Mishra",
      dateOfBirth : new Date()
    },
    {
      firstName : "Sumit",
      lastName : "Das",
      dateOfBirth : new Date()
    },
    {
      firstName : "Sanjay",
      lastName : "Sinha",
      dateOfBirth : new Date()
    },
    {
      firstName : "Rajiv",
      lastName : "Kumar",
      dateOfBirth : new Date()
    },
    {
      firstName : "Soham",
      lastName : "Das",
      dateOfBirth : new Date()
    }
  ];

}

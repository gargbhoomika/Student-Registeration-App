import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
  
    name: '';
    gender: '';
    email: '';
    phone: '';
    department: '';
    dob: '';
    agreement: '';
  onSubmit() {
    console.log(name);
  }

}

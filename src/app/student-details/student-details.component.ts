import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  name = "Test";
  email = "test@example.com";
  submitvalue = true;
  cancelvalue = false;
  phone="9501551211";
  roll="3783";
  fathername = "Dr. Pawan Garg";
  mothername = "Dr. Sarita Garg";
  constructor() { }
  ngOnInit() {
    
  }

}

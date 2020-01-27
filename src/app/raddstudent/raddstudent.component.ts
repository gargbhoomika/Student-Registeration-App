import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-raddstudent',
  templateUrl: './raddstudent.component.html',
  styleUrls: ['./raddstudent.component.css']
})

export class RaddstudentComponent implements OnInit {
  registerationForm: FormGroup;
    submitted:boolean = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerationForm = this.formBuilder.group({
            Name: ['', Validators.required],
            email: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        });
    }
    get f() { return this.registerationForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerationForm.invalid) {
            return;
        }
        alert('SUCCESS!!')
      }
}

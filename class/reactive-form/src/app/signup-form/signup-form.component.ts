import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      cPassword: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  checkPassword() {
    if (
      this.reactiveForm.controls.password.value !==
      this.reactiveForm.controls.cPassword.value
    ) {
      this.reactiveForm.controls.cPassword.setErrors({ mismatched: true });
    }
  }
  onSubmit() {
    this.http
      .post('http://localhost:3000/user', this.reactiveForm.value)
      .toPromise()
      .then((result) => {
        console.log('result' + result);
      })
      .catch((err) => {
        console.log(err.error.text);
        this.reactiveForm.controls.email.setErrors({ emailExist: true });
      });
    console.log(this.reactiveForm.value);
  }
  ngOnInit() {
    // this.reactiveForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(5)]],
    //   cPassword: ['', [Validators.required, Validators.minLength(5)]],
    // });
  }
}

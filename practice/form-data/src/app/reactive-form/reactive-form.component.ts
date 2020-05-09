import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  userData = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(5)]],
    cPassword: [null, [Validators.required, Validators.minLength(5)]],
  });
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  saveData() {
    console.log(this.userData.value);
    this.http
      .post('http://localhost:3000/user', this.userData.value)
      .toPromise()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        // this.userData.controls.email.setErrors({ exists: true });
      });
  }
  checkPassword() {
    if (
      this.userData.controls.password.value !==
      this.userData.controls.cPassword.value
    ) {
      this.userData.controls.cPassword.setErrors({ mismatched: true });
    }
  }
  ngOnInit(): void {}
}

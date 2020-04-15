import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent {
  email: string;
  // done: any;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  checkPassword(formData) {
    console.log(formData.value);
    if (
      formData.controls.password.value !== formData.controls.cPassword.value
    ) {
      formData.controls.cPassword.setErrors({ notMatched: true });
    }
  }

  saveData(data) {
    // console.log(data.value);
    this.http
      .post('http://localhost:3000/user', data.value)
      .toPromise()
      .then((result) => {
        console.log(result);
        // this.done = 'User Created Successfully !';
      })
      .catch((err) => {
        console.log(err.error.text);
        this.email = err.error.text;
        // if (err.error.text == 'Email Id Already Exists') {
        //   this.email = 'error';
        // }
      });
  }
  checkEmail(formData) {
    if (this.email === 'error') {
      formData.controls.email.setErrors({ emailExists: true });
    }
  }
}

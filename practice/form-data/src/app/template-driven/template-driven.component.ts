import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  email: string;
  ngOnInit(): void {}

  constructor(private http: HttpClient) {}
  saveData(data) {
    console.log(data.value);
    this.http
      .post('http://localhost:3000/user', data.value)
      .toPromise()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        data.controls.email.setErrors({ emailExists: true });
      });
  }
  checkPassword(data) {
    if (data.controls.password.value !== data.controls.cPassword.value) {
      data.controls.cPassword.setErrors({ Mismatched: true });
    }
  }
}

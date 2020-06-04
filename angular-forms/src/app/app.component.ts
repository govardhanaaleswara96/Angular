import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('userData') formData: NgForm;
  defaultQuestion = 'teacher';
  feedback = '';
  genders = ['Male', 'Female'];
  user = {
    userName: '',
    userEmail: '',
    secret: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.formData.setValue({
    //   formData: {
    //     userName: suggestedName,
    //     userEmail: '',
    //   },
    //   secret: '',
    //   gender: 'Male',
    //   feedback: '',
    // });
    this.formData.form.patchValue({
      formData: {
        userName: suggestedName,
        userEmail: '',
      },
      secret: '',
      gender: 'Male',
      feedback: '',
    });
  }
  // saveData(data: NgForm) {
  //   console.log(data.value);
  // }
  saveData() {
    this.submitted = true;
    console.log(this.formData);
    this.user.userName = this.formData.value.formData.userName;
    this.user.userEmail = this.formData.value.formData.userEmail;
    this.user.secret = this.formData.value.secsret;
    this.user.answer = this.formData.value.feedback;
    this.user.gender = this.formData.value.gender;
    this.formData.reset();
  }
}

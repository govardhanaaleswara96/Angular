import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  FormArray,
  FormControlName,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { rejects } from 'assert';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  genders = ['Male', 'Female'];
  userData: FormGroup;
  forBittenUserNames = ['goa', 'gova'];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userData = new FormGroup({
      mainData: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          this.forBittenUsers.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forBittenEmails
        ),
      }),
      contact: new FormControl(null, Validators.required),
      gender: new FormControl('Male', Validators.required),
      hobbies: new FormArray([]),
    });
    // this.userData.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.userData.statusChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.userData.setValue({
    //   mainData: { name: 'govardhan', email: 'goabala@gmail.com' },
    //   contact: '12345',
    //   gender: 'Male',
    //   hobbies: [],
    // });
    this.userData.patchValue({
      mainData: { name: 'govardhan', email: 'goabala@gmail.com' },
      contact: '12345',
      gender: 'Male',
      hobbies: [],
    });
  }
  onSubmit() {
    console.log(this.userData);
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.userData.get('hobbies')).push(control);
  }
  forBittenUsers(control: FormControl): { [s: string]: boolean } {
    if (this.forBittenUserNames.indexOf(control.value) !== -1) {
      return { forBittenName: true };
    }
    return null;
  }
  forBittenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, rejects) => {
      setTimeout(() => {
        if (control.value === 'goabala88@gmail.com') {
          resolve({ 'EmailId ForBitten': true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }
}

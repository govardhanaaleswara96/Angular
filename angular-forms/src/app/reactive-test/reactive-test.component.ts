import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { customValidators } from './custom.validator';

@Component({
  selector: 'app-reactive-test',
  templateUrl: './reactive-test.component.html',
  styleUrls: ['./reactive-test.component.css'],
})
export class ReactiveTestComponent implements OnInit {
  status = ['Stable', 'Critical', 'Finished'];
  practiceForm = this.fb.group({
    name: [
      null,
      [Validators.required, customValidators.checkNameChecker],
      customValidators.nameChecker,
    ],
    email: [null, [Validators.required, Validators.email]],
    state: ['Stable', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.practiceForm);
    console.log(this.practiceForm.value);
  }
}

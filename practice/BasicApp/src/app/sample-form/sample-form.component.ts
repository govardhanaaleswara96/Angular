import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sample-form",
  templateUrl: "./sample-form.component.html",
  styleUrls: ["./sample-form.component.css"],
})
export class SampleFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["shivarajnaidu@gmail.com", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
}

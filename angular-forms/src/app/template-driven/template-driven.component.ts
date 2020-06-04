import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor() {}
  @ViewChild('formData') tempData: NgForm;

  ngOnInit(): void {}

  saveData() {
    console.log(this.tempData);
  }
}

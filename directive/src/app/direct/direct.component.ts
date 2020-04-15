import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  oddNum = [1, 3, 5];
  evenNum = [2, 4];
  onlyOdd = false;
  value = 5;
  constructor() {}

  ngOnInit(): void {}
}

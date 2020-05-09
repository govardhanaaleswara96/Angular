import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  // @Input() color = 'brown';
  num = Math.random();
  @Input() bcColor = 'dodgerblue';
  @Output() secret = new EventEmitter();

  constructor() {
    // console.log(this.color);
  }

  ngOnInit(): void {
    // console.log(this.color);
  }
  emitValue() {
    console.log(this.num);
    this.secret.emit(this.num);
  }
}

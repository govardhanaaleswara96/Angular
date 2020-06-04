import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  birthday = new Date(1997, 2, 8); // April 15, 1988
  // constructor() {
  //   //    birthDay = new Date(1997, 3, 08);
  // }
}

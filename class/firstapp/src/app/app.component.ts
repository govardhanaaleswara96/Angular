import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Govardhan Aaleswara';
  isChanged: true;
  secretValues = [10, 20];

  handleSecret(event) {
    console.log('Secret Event Emited', event);
    this.secretValues.push(event);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material';
  notification = 10;
  showSpinner = false;
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = true;
    }, 5000);
  }
}

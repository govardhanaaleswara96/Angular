import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: `
    <p>I AM WARNING MESSAGE</p>
  `,
  styles: [
    `
      p {
        padding: 30px;
        background-color: orange;
        border: 2px solid crimson;
        color: white;
      }
    `
  ]
})
export class WarningAlertComponent {}

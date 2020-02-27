import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      h2,
      .container {
        margin: 20px;
        /* padding: 20px; */
        color: black;
      }
    `
  ]
})
export class AppComponent {
  name = "Govardhan Aaleswara";
}

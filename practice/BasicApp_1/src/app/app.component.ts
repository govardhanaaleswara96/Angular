import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "BasicApp";
  loadFeature: string = "recipe";
  onNavigation(feature: string) {
    this.loadFeature = feature;
  }
}

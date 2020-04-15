import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loadFeature: string = "recipe";
  title = "BasicApp";
  onNavigation(feature: string) {
    //console.log(feature);
    this.loadFeature = feature;
  }
}

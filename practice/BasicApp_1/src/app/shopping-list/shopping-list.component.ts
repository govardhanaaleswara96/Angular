import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients = [{ productName: "Apple", productAmount: 10 }];

  constructor() {}
  ngOnInit(): void {}
  createList(data) {
    this.ingredients.push(data);
    // console.log(data);
  }
}

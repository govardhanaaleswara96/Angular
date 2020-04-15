import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipes } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetailItem = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
    new Recipes(
      "A Test Name",
      "A Simple Test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  getRecipeDetail(recipe: Recipes) {
    this.recipeDetailItem.emit(recipe);
  }
}

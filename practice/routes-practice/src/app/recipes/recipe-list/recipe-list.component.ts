import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipes } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  // getRecipeDetail(recipe: Recipes) {
  //   this.recipeDetailItem.emit(recipe);
  // }
}

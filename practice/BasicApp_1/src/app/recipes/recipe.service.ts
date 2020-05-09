import { Injectable, EventEmitter } from "@angular/core";
import { Recipes } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipes>();
  private recipes: Recipes[] = [
    new Recipes(
      "A Test Name",
      "A Simple Test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("meat", 10), new Ingredient("salt", 10)]
    ),
    new Recipes(
      "A",
      "A",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("meat", 10), new Ingredient("done", 10)]
    ),
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredient: Ingredient[]) {
    alert(JSON.stringify(ingredient));
    this.shoppingService.addIngredients(ingredient);
  }
}

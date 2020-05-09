import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("apple", 10),
    new Ingredient("orange", 10),
  ];
  constructor() {}
  getIngredients() {
    return this.ingredients.slice();
  }
  addData(data: Ingredient) {
    //console.log(data);
    this.ingredients.push(data);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    // alert(JSON.stringify(this.ingredients));
    this.ingredientChanged.emit(this.ingredients.slice());
    alert(this.ingredients.slice());
  }
}

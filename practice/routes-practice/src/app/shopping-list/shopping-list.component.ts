import { Component, OnInit, OnChanges } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  // providers: [ShoppingService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        // console.log(ingredients);
        this.ingredients = ingredients;
      }
    );
  }
}

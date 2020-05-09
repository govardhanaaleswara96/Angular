import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipes } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipes;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
  productDetails() {
    // console.log("item");
    // this.recipeDetail.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

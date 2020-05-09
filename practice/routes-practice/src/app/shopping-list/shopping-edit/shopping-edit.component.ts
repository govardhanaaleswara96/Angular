import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ShoppingService } from "../shopping.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  // @Output() productValues = new EventEmitter<{
  //   productName: String;
  //   productAmount: number;
  // }>();
  newName: string;
  newAmount: number;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}
  emitValue() {
    this.shoppingService.addData({
      name: this.newName,
      amount: this.newAmount,
    });
    // this.productValues.emit({
    //   productName: this.newName,
    //   productAmount: this.newAmount,
    // });
    // console.log(this.newName);
    // console.log(this.newAmount);
  }
}

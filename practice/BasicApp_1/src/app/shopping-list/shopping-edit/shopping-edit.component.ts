import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @Output() productValues = new EventEmitter<{
    productName: String;
    productAmount: number;
  }>();
  newName: string;
  newAmount: number;
  constructor() {}

  ngOnInit(): void {}
  emitValue() {
    this.productValues.emit({
      productName: this.newName,
      productAmount: this.newAmount,
    });
    // console.log(this.newName);
    // console.log(this.newAmount);
  }
}

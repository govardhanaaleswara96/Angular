import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css'],
})
export class ProductAdminComponent implements OnInit {
  products: any;
  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .then((result) => {
        // console.log(result);
        this.products = result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteProduct(id) {
    console.log(id);
    this.products = this.products.filter(({ _id }) => id !== _id);
    this.productService.deleteProduct(id);
    this._snackBar.open('Product Deleted SuccessFully', '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['blueSnackbar'],
    });
    // this.productService
    //   .getProducts()
    //   .then((result) => {
    //     // console.log(result);
    //     this.products = result;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}

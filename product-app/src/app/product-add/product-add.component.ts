import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  ngOnInit(): void {}
  durationInSeconds = 5;
  productForm = this.fb.group({
    title: [null, Validators.required],
    imgUrl: [null, Validators.required],
    price: [null, Validators.required],
    desc: [null, Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit() {
    console.log(this.productForm.value);
    this.productService
      .addProduct(this.productForm.value)
      .then((result) => {
        console.log(result);
        console.log('result');
        this._snackBar.open('successFully Added', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['blueSnackbar'],
        });
      })
      .catch((err) => {
        console.log('err');
        console.log(err);
        this._snackBar.open('something went to wrong', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['blueSnackbar'],
        });
      });
    this.route.navigate(['/products']);
  }
}

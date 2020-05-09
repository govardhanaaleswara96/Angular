import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  id;
  product: any;
  // productForm = this.fb.group({
  //   title: [null, Validators.required],
  //   imgUrl: [null, Validators.required],
  //   price: [null, Validators.required],
  //   desc: [null, Validators.required],
  // });

  productForm: FormGroup;

  onSubmit() {
    //console.log(this.productForm.value);
    this.productService
      .editProduct(this.productForm.value)
      .then((result) => {
        console.log(result);
        this._snackBar.open('successFully Changed', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['blueSnackbar'],
        });
      })
      .catch((err) => {
        console.log(err);
        this._snackBar.open('something went to wrong', '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['blueSnackbar'],
        });
      });
    this.router.navigate(['/products']);
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.productService
      .getProduct(this.id)
      .then((result: any) => {
        // console.log(result);
        this.productForm = this.fb.group({
          title: [result.title, Validators.required],
          imgUrl: [result.imgUrl, Validators.required],
          price: [result.price, Validators.required],
          desc: [result.desc, Validators.required],
          id: [result._id, Validators.required],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

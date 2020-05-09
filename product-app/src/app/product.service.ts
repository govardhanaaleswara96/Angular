import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:2000/product').toPromise();
  }

  getProduct(id) {
    return this.http.get(`http://localhost:2000/product/${id}`).toPromise();
  }

  addProduct(product) {
    console.log(product);
    return this.http.post('http://localhost:2000/product', product).toPromise();
  }

  editProduct(product) {
    console.log(product);
    return this.http
      .put(`http://localhost:2000/product/${product.id}`, product)
      .toPromise();
  }

  deleteProduct(id) {
    return this.http.delete(`http://localhost:2000/product/${id}`).toPromise();
  }
}

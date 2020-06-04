import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'add-product', component: ProductAddComponent },
  { path: 'admin-product', component: ProductAdminComponent },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
  // {path:'cart',component:ProductAdminComponent},
  // {path:'order',component:ProductAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

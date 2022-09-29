import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CreateProductComponentModule,
  EditProductComponentModule,
  HttpProductsServiceModule,
  InMemoryProductsStorageModule,
  LoadProductsResolver,
  LoadProductsResolverModule,
  ProductListComponentModule,
  ProductsStateModule,
} from '@products';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        resolve: [LoadProductsResolver],
      },
    ]),
    InMemoryProductsStorageModule,
    HttpProductsServiceModule,
    ProductsStateModule,
    LoadProductsResolverModule,
    ProductListComponentModule,
    // CreateProductComponentModule,
    // EditProductComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { ProductsState } from './products.state';
import { LOAD_PRODUCTS_COMMAND } from '../ports/primary/command/load-products.command-port';
import { GETS_CURRENT_PRODUCT_LIST_QUERY } from '../ports/primary/query/gets-current-product-list.query-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ProductsState,
    { provide: LOAD_PRODUCTS_COMMAND, useExisting: ProductsState },
    { provide: GETS_CURRENT_PRODUCT_LIST_QUERY, useExisting: ProductsState },
  ],
  exports: [],
})
export class ProductsStateModule {}

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, take } from 'rxjs';
import { ProductListQuery } from '../../../application/ports/primary/query/product-list.query';
import {
  GETS_CURRENT_PRODUCT_LIST_QUERY,
  GetsCurrentProductListQueryPort,
} from '../../../application/ports/primary/query/gets-current-product-list.query-port';
// import {
//   SELECT_PRODUCT_COMMAND,
//   SelectProductCommandPort,
// } from '../../../application/ports/primary/command/select-product.command-port';
// import { SelectProductCommand } from '../../../application/ports/primary/command/select-product.command';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  productList$: Observable<ProductListQuery> =
    this._getsCurrentProductListQuery.getCurrentProductListQuery();

  constructor(
    @Inject(GETS_CURRENT_PRODUCT_LIST_QUERY)
    private _getsCurrentProductListQuery: GetsCurrentProductListQueryPort,
    // @Inject(SELECT_PRODUCT_COMMAND)
    // private _selectProductCommand: SelectProductCommandPort
  ) {}

  // onItemClicked(productId: number): void {
  //   this._selectProductCommand
  //     .selectProduct(new SelectProductCommand(productId))
  //     .pipe(take(1))
  //     .subscribe();
  // }
}

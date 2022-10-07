import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { GetsCurrentProductListQueryPort } from '../ports/primary/query/gets-current-product-list.query-port';
import { RemoveProductCommandPort } from '../ports/primary/command/remove-product.command-port';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../ports/secondary/dto/gets-all-product.dto-port';
import {
  SETS_STATE_PRODUCT_CONTEXT,
  SetsStateProductContextPort,
} from '../ports/secondary/context/sets-state-product.context-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../ports/secondary/context/selects-product.context-port';
import {
  REMOVES_PRODUCT_DTO,
  RemovesProductDtoPort,
} from '../ports/secondary/dto/removes-product.dto-port';
import { LoadProductsCommand } from '../ports/primary/command/load-products.command';
import { ProductListQuery } from '../ports/primary/query/product-list.query';
import { RemoveProductCommand } from '../ports/primary/command/remove-product.command';
import { mapFromProductContext } from './product-list-query.mapper';
import { ProductContext } from '../ports/secondary/context/product.context';

const makeRandomId = (): number =>
  parseInt(`${new Date().getTime()}${Math.ceil(Math.random() * 1000)}`);

@Injectable()
export class ProductsState
  implements GetsCurrentProductListQueryPort, RemoveProductCommandPort
{
  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort,
    @Inject(REMOVES_PRODUCT_DTO)
    private _removesProductDto: RemovesProductDtoPort
  ) {}

  loadProducts(command: LoadProductsCommand): Observable<void> {
    return this._getsAllProductDto
      .getAll()
      .pipe(
        switchMap((products) =>
          this._setsStateProductContext.setState({ all: products })
        )
      );
  }

  getCurrentProductListQuery(): Observable<ProductListQuery> {
    return this._selectsProductContext
      .select()
      .pipe(map((ctx) => mapFromProductContext(ctx)));
  }

  removeProduct(command: RemoveProductCommand): Observable<void> {
    return this._removesProductDto.remove(command.productId).pipe(
      switchMap(() => this._selectsProductContext.select().pipe(take(1))),
      map((productContext: ProductContext) => {
        return {
          ...productContext,
          all: productContext.all.filter((p) => p.id !== command.productId),
        };
      }),
      switchMap((productContext) =>
        this._setsStateProductContext.setState(productContext)
      )
    );
  }
}

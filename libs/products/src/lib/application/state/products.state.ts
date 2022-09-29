import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsCurrentProductListQueryPort } from '../ports/primary/query/gets-current-product-list.query-port';
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
import { ProductListQuery } from '../ports/primary/query/product-list.query';
import { LoadProductsCommand } from '../ports/primary/command/load-products.command';
import { ProductDTO } from '../ports/secondary/dto/product.dto';
import { mapFromProductContext } from './product-list-query.mapper';

const makeRandomId = (): number =>
  parseInt(`${new Date().getTime()}${Math.ceil(Math.random() * 1000)}`);

@Injectable()
export class ProductsState implements GetsCurrentProductListQueryPort {
  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort
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
}

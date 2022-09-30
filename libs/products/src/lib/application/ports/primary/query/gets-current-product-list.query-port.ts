import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListQuery } from './product-list.query';

export const GETS_CURRENT_PRODUCT_LIST_QUERY = new InjectionToken<GetsCurrentProductListQueryPort>('GETS_CURRENT_PRODUCT_LIST_QUERY');

export interface GetsCurrentProductListQueryPort {
  getCurrentProductListQuery(): Observable<ProductListQuery>;
}

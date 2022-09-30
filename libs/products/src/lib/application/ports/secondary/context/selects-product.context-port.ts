import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const SELECTS_PRODUCT_CONTEXT = new InjectionToken<SelectsProductContextPort>('SELECTS_PRODUCT_CONTEXT');

export interface SelectsProductContextPort {
  select(): Observable<ProductContext>;
}

import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const SETS_STATE_PRODUCT_CONTEXT = new InjectionToken<SetsStateProductContextPort>('SETS_STATE_PRODUCT_CONTEXT');

export interface SetsStateProductContextPort {
  setState(state: ProductContext): Observable<void>;
}

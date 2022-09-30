import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadProductsCommand } from './load-products.command';

export const LOAD_PRODUCTS_COMMAND = new InjectionToken<LoadProductsCommandPort>('LOAD_PRODUCTS_COMMAND');

export interface LoadProductsCommandPort {
  loadProducts(command: LoadProductsCommand): Observable<void>;
}

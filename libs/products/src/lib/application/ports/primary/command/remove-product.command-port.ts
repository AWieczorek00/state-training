import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveProductCommand } from './remove-product.command';

export const REMOVE_PRODUCT_COMMAND = new InjectionToken<RemoveProductCommandPort>('REMOVE_PRODUCT_COMMAND');

export interface RemoveProductCommandPort {
  removeProduct(command: RemoveProductCommand): Observable<void>;
}

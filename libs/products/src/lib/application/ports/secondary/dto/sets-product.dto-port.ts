import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from './product.dto';

export const SETS_PRODUCT_DTO = new InjectionToken<SetsProductDtoPort>('SETS_PRODUCT_DTO');

export interface SetsProductDtoPort {
  set(productDTO: Partial<ProductDTO>): Observable<void>;
}

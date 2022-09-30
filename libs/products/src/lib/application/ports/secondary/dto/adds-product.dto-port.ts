import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from './product.dto';

export const ADDS_PRODUCT_DTO = new InjectionToken<AddsProductDtoPort>('ADDS_PRODUCT_DTO');

export interface AddsProductDtoPort {
  add(productDTO: Partial<ProductDTO>): Observable<void>;
}

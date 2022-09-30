import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const REMOVES_PRODUCT_DTO = new InjectionToken<RemovesProductDtoPort>('REMOVES_PRODUCT_DTO');

export interface RemovesProductDtoPort {
  remove(id: number): Observable<void>;
}

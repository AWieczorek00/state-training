import { Injectable } from '@angular/core';
import { Observable, Subject, of, ReplaySubject } from 'rxjs';
import { SetsStateProductContextPort } from '../../../application/ports/secondary/context/sets-state-product.context-port';
import { SelectsProductContextPort } from '../../../application/ports/secondary/context/selects-product.context-port';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';

@Injectable()
export class InMemoryProductsStorage
  implements SetsStateProductContextPort, SelectsProductContextPort
{
  private _subject: Subject<ProductContext> = new ReplaySubject<ProductContext>(
    1
  );

  setState(state: ProductContext): Observable<void> {
    return of(this._subject.next(state));
  }

  select(): Observable<ProductContext> {
    return this._subject.asObservable() as Observable<ProductContext>;
  }
}

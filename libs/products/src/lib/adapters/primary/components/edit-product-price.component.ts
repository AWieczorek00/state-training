// import {
//   ChangeDetectionStrategy,
//   Component,
//   Inject,
//   ViewEncapsulation,
// } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { map, take } from 'rxjs/operators';
// import {
//   GETS_EDIT_PRODUCT_QUERY,
//   GetsEditProductQueryPort,
// } from '../../../application/ports/primary/query/gets-edit-product.query-port';
// import {
//   CHANGE_PRODUCT_PRICE_COMMAND,
//   ChangeProductPriceCommandPort,
// } from '../../../application/ports/primary/command/change-product-price.command-port';
// import { ChangeProductPriceCommand } from '../../../application/ports/primary/command/change-product-price.command';

import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'lib-edit-product-price',
  templateUrl: './edit-product-price.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductPriceComponent {
//   readonly editPriceForm$: Observable<FormGroup> = this._getsEditProductQuery
//     .getCurrentEditProductQuery()
//     .pipe(
//       map(
//         (query) =>
//           new FormGroup({
//             id: new FormControl(query.id),
//             price: new FormControl(query.price),
//           })
//       )
//     );

//   constructor(
//     @Inject(GETS_EDIT_PRODUCT_QUERY)
//     private _getsEditProductQuery: GetsEditProductQueryPort,
//     @Inject(CHANGE_PRODUCT_PRICE_COMMAND)
//     private _changeProductPriceCommand: ChangeProductPriceCommandPort
//   ) {}

//   onEditPriceFormSubmitted(editPriceForm: FormGroup): void {
//     this._changeProductPriceCommand
//       .changeProductPrice(
//         new ChangeProductPriceCommand(
//           editPriceForm.get('id')?.value,
//           editPriceForm.get('price')?.value
//         )
//       )
//       .pipe(take(1))
//       .subscribe();
//   }
}

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { map, take } from 'rxjs/operators';
// import {
//   GETS_EDIT_PRODUCT_QUERY,
//   GetsEditProductQueryPort,
// } from '../../../application/ports/primary/query/gets-edit-product.query-port';
// import {
//   UPDATE_PRODUCT_COMMAND,
//   UpdateProductCommandPort,
// } from '../../../application/ports/primary/command/update-product.command-port';
// import { UpdateProductCommand } from '../../../application/ports/primary/command/update-product.command';

@Component({
  selector: 'lib-edit-product',
  templateUrl: './edit-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent {
//   readonly editForm$: Observable<FormGroup> = this._getsEditProductQuery
//     .getCurrentEditProductQuery()
//     .pipe(
//       map(
//         (query) =>
//           new FormGroup({
//             id: new FormControl(query.id),
//             name: new FormControl(query.name),
//             price: new FormControl(query.price),
//           })
//       )
//     );

//   constructor(
//     @Inject(GETS_EDIT_PRODUCT_QUERY)
//     private _getsEditProductQuery: GetsEditProductQueryPort,
//     @Inject(UPDATE_PRODUCT_COMMAND)
//     private _updateProductCommand: UpdateProductCommandPort
//   ) {}

//   onEditFormSubmitted(editForm: FormGroup): void {
//     this._updateProductCommand
//       .updateProduct(
//         new UpdateProductCommand(
//           editForm.get('id')?.value,
//           editForm.get('name')?.value,
//           editForm.get('price')?.value
//         )
//       )
//       .pipe(take(1))
//       .subscribe();
//   }
}

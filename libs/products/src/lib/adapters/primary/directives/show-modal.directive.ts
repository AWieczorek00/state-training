import { Directive, HostListener, Inject, Input } from '@angular/core';
import { take } from 'rxjs';
// import { SelectProductCommand } from '../../../application/ports/primary/command/select-product.command';
// import {
//   SelectProductCommandPort,
//   SELECT_PRODUCT_COMMAND,
// } from '../../../application/ports/primary/command/select-product.command-port';
import { MatDialog } from '@angular/material/dialog';
// import { EditProductPriceComponent } from '../components/edit-product-price.component';

@Directive({ selector: '[libShowModal]' })
export class ShowModalDirective {
  // private _productId = 0;
  // @Input() set libShowModal(productId: number) {
  //   this._productId = productId;
  // }
  // constructor(
  //   @Inject(SELECT_PRODUCT_COMMAND)
  //   private _selectProductCommand: SelectProductCommandPort,
  //   private _dialog: MatDialog
  // ) {}

  // @HostListener('click')
  // onClicked(): void {
  //   this._selectProductCommand
  //     .selectProduct(new SelectProductCommand(this._productId))
  //     .pipe(take(1))
  //     .subscribe(() =>
  //       this._dialog.open(EditProductPriceComponent, {
  //         maxWidth: '90vw',
  //         maxHeight: '90vh',
  //         height: '90%',
  //         width: '90%',
  //       })
  //     );
  // }
}

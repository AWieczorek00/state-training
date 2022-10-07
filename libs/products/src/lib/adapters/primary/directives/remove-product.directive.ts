import {
  Directive,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { take } from 'rxjs';
import { RemoveProductCommand } from '../../../application/ports/primary/command/remove-product.command';
import {
  REMOVE_PRODUCT_COMMAND,
  RemoveProductCommandPort,
} from '../../../application/ports/primary/command/remove-product.command-port';

@Directive({ selector: '[libRemoveProduct]' })
export class RemoveProductDirective {
  private _productId = 0;
  @Input() set libRemoveProduct(productId: number) {
    this._productId = productId;
  }
  @Output() onRemoved = new EventEmitter();

  constructor(
    @Inject(REMOVE_PRODUCT_COMMAND)
    private _removeProductCommand: RemoveProductCommandPort
  ) {}

  @HostListener('click')
  onClicked(): void {
    this._removeProductCommand
      .removeProduct(new RemoveProductCommand(this._productId))
      .pipe(take(1))
      .subscribe(() => this.onRemoved.emit());
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { take } from 'rxjs';
// import { CreateProductCommand } from '../../../application/ports/primary/command/create-product.command';
// import {
//   CREATE_PRODUCT_COMMAND,
//   CreateProductCommandPort,
// } from '../../../application/ports/primary/command/create-product.command-port';

@Component({
  selector: 'lib-create-product',
  templateUrl: './create-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductComponent {
//   readonly form: FormGroup = new FormGroup({
//     name: new FormControl(),
//     price: new FormControl(),
//   });

//   constructor(
//     @Inject(CREATE_PRODUCT_COMMAND)
//     private _createProductCommand: CreateProductCommandPort
//   ) {}

//   onFormSubmitted(form: FormGroup): void {
//     if (form.invalid) {
//       return;
//     }
//     this._createProductCommand
//       .createProduct(
//         new CreateProductCommand(
//           form.get('name')?.value,
//           parseInt(form.get('price')?.value)
//         )
//       )
//       .pipe(take(1))
//       .subscribe(() => this.form.reset());
//   }
}

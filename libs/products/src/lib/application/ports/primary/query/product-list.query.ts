import { ProductQuery } from "./product.query";

export class ProductListQuery {
  constructor(public readonly items: ProductQuery[]) {}
}

import { ProductDTO } from "../dto/product.dto";

export interface ProductContext {
  readonly all: ProductDTO[];
}

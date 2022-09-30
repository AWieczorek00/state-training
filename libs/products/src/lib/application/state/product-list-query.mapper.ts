import { ProductListQuery } from "../ports/primary/query/product-list.query";
import { ProductContext } from "../ports/secondary/context/product.context";

export const mapFromProductContext=(
    context: ProductContext
): ProductListQuery => new ProductListQuery(context.all.map((product)=>`${product.name} for $${product.price}`))
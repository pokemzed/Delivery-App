import {FC} from "react";
import {ProductCard} from "../ProductCard/ProductCard.tsx";
import {IProduct} from "../../shared/types/product.tsx";

export const ProductsMenu: FC<{ products: IProduct[] }> = ({products}) => {
    return (
        <>
            {
                products.map(product => <ProductCard key={product.id} {...product} />)
            }
        </>
    )
}
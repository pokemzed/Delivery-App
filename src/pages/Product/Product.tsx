import React, {FC} from "react";
import styles from './Product.module.css'
import LayoutPage from "../../layout/LayoutPage.tsx";
import {IProduct} from "../Menu/Menu.tsx";
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";
import {useParams} from "react-router-dom";

const Product: FC = () => {
    const {id} = useParams()
    const [product, setProduct] = React.useState<IProduct | null>(null)

    React.useEffect(() => {
        fetch(`https://purpleschool.ru/pizza-api-demo/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <LayoutPage className={styles.Product}>
            Product page
            {product && <ProductCard
                id={product.id}
                image={product.image}
                title={product.name}
                description={product.ingredients.join(', ')}
                price={product.price}
                rating={product.rating}
            />}
        </LayoutPage>
    )
}
export default Product
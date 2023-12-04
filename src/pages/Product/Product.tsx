import {FC} from "react";
import styles from './Product.module.css'
import LayoutPage from "../../layout/Layout/LayoutPage.tsx";
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";
import {useParams} from "react-router-dom";
import {useGetProductMenuQuery} from "../../shared/api";

const Product: FC = () => {
    const {id} = useParams()
    const {data: product, isLoading} = useGetProductMenuQuery(id!)

    return (
        <LayoutPage className={styles.Product}>
            Product page
            {isLoading && <span>Loading products...</span>}
            {product && <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                ingredients={product.ingredients}
                price={product.price}
                rating={product.rating}
            />}
        </LayoutPage>
    )
}
export default Product
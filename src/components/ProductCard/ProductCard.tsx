import {FC, MouseEvent} from "react";
import styles from './ProductCard.module.css'
import {Link} from "react-router-dom";
import {IProduct} from "../../shared/types/product.ts";
import {useAppDispatch} from "../../hooks/useAppSelector.ts";
import {addCart} from "../../shared/store/slices/cartSlice.ts";

export const ProductCard: FC<IProduct> = ({image, id, rating, price, name, ingredients}) => {
    const dispatch = useAppDispatch()
    const addItemToCart = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(addCart(id))
    }

    return (
        <Link to={`/menu/${id}`} className={styles.ProductCard}>
            <div className={styles.imageCard}>
                <img src={image} alt={`image-${name}`}/>
                <div className={styles.price}>
                    <p>
                        {price.toLocaleString()} <span>₽</span>
                    </p>
                </div>
                <button className={styles.buttonAdd} onClick={addItemToCart}>
                    <img src="/icons/icon-add-cart.svg" alt="icon-add"/>
                </button>
                <div className={styles.rating}>
                    <span>{rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path
                            d="M8.75095 10.0934L5.58045 8.42735L2.40873 10.0934L3.01588 6.56221L0.447662 4.062L3.99338 3.54714L5.58045 0.285568L7.16752 3.54714L10.7132 4.062L8.14502 6.56343L8.75095 10.0934Z"
                            fill="#FFC529"/>
                    </svg>
                </div>
            </div>
            <div className={styles.infoCard}>
                <h3>{name}</h3>
                <p>{ingredients.join(', ')}</p>
            </div>
        </Link>
    )
}
import {FC} from "react";
import styles from './ItemCart.module.css'
import {useAppDispatch} from "../../hooks/useAppSelector.ts";
import {addCart, decreaseItem, removeItem} from "../../shared/store/slices/cartSlice.ts";

interface ICartProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    count: number
}

export const ItemCart: FC<ICartProduct> = (product) => {
    const dispatch = useAppDispatch()

    const increaseItemCart = () => dispatch(addCart(product.id))
    const decreaseItemCart = () => dispatch(decreaseItem(product.id))
    const removeItemCart = () => dispatch(removeItem(product.id))

    return (
        <div className={styles.itemCart}>
            <div className={styles.itemInfo}>
                <img src={product.image} alt={product.name}/>
                <div className={styles.text}>
                    <h3>{product.name}</h3>
                    <span>{product.price.toLocaleString()} ₽</span>
                </div>
            </div>
            <div className={styles.itemControllers}>
                <div className={styles.itemCounter}>
                    <button onClick={decreaseItemCart} className={styles.count}>-</button>
                    <span>{product.count}</span>
                    <button onClick={increaseItemCart} className={styles.count}>+</button>
                </div>
                <button onClick={removeItemCart} className={styles.deleteItem}>
                    <img src="/icons/delete-item-cart.svg" alt="delete-icon"/>
                </button>
            </div>
        </div>
    )
}
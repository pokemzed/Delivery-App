import {FC, useEffect, useState} from "react";
import LayoutPage from "../../layout/Layout/LayoutPage.tsx";
import styles from "./Cart.module.css";
import Headling from "../../components/Headling/Headling.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {ItemCart} from "../../components/ItemCart/ItemCart.tsx";
import {IProduct} from "../../shared/types/product.ts";
import {useLazyGetProductMenuQuery} from "../../shared/api";

const Cart: FC = () => {
    const [getProduct] = useLazyGetProductMenuQuery()
    const [cartItems, setCartItems] = useState<IProduct[] | (IProduct | undefined)[]>([])
    const {items} = useAppSelector(state => state.cart)

    const getItem = async (id: number) => {
        try {
            const res = await getProduct(String(id))
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)))
        setCartItems(res)
    }

    useEffect(() => {
        loadAllItems()
    }, [items]);

    return (
        <LayoutPage
            className={styles.CartPage}
        >
            <Headling title={'Корзина'} onClick={() => getItem(1)}/>
            <div className={styles.itemsContainer}>
                {items.map(item => {
                    const product = cartItems.find(product => {
                        if(product){
                            return product.id === item.id
                        }
                    })
                    if (!product) {
                        return
                    }
                    return <ItemCart key={item.id} count={item.count} {...product}/>
                })}
            </div>
        </LayoutPage>
    )
}
export default Cart
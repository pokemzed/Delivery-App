import {FC, useEffect, useState} from "react";
import LayoutPage from "../../layout/Layout/LayoutPage.tsx";
import styles from "./Cart.module.css";
import Headling from "../../components/Headling/Headling.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector.ts";
import {ItemCart} from "../../components/ItemCart/ItemCart.tsx";
import {IProduct} from "../../shared/types/product.ts";
import {useCreateOrderMutation, useLazyGetProductMenuQuery} from "../../shared/api";
import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {clearCart} from "../../shared/store/slices/cartSlice.ts";

const DELIVERY_FEE = 169

const Cart: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {token: jwt} = useAppSelector(state => state.auth)
    const [getProduct] = useLazyGetProductMenuQuery()
    const [createOrder, {error, isLoading}] = useCreateOrderMutation()
    const [cartItems, setCartItems] = useState<IProduct[] | (IProduct | undefined)[]>([])
    const {items} = useAppSelector(state => state.cart)

    //Функция - отправка товаров на сервер
    const handleCreateOrder = async () => {
        try {
            if (jwt) {
                const order = {
                    products: items,
                    jwt
                }
                await createOrder(order)
                dispatch(clearCart())
                navigate('/success')
            }
        } catch (err) {
            console.log(err, error)
        }
    }

    //Функция получения товара с бекенда по id из стейта
    const getItem = async (id: number) => {
        try {
            const res = await getProduct(String(id))
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    //Получение и упаковка всех товаров корзины в стейт
    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)))
        setCartItems(res)
    }

    useEffect(() => {
        loadAllItems()
    }, [items]);


    //Получение суммы товаров корзины
    const sumProductsCart = items.map(item => {
        const product = cartItems.find(product => {
            if (product) {
                return product.id === item.id
            }
        })
        if (!product) {
            return 0
        }
        return item.count * product.price
    }).reduce((acc, i) => acc += i, 0)

    return (
        <LayoutPage
            className={styles.CartPage}
        >
            <Headling title={'Корзина'} onClick={() => getItem(1)}/>
            {!items.length && <span>Корзина пуста</span>}
            {items.length > 0 && (
                <>
                    <div className={styles.itemsContainer}>
                        {items.map(item => {
                            const product = cartItems.find(product => {
                                if (product) {
                                    return product.id === item.id
                                }
                            })
                            if (!product) {
                                return
                            }
                            return <ItemCart key={item.id} count={item.count} {...product}/>
                        })}
                    </div>
                    <div className={styles.orderContainer}>
                        <div className={styles.orderInfo}>
                            <div className={styles.text}>
                                <h4>Итого</h4>
                                <span>{sumProductsCart.toLocaleString()} ₽</span>
                            </div>
                            <hr/>
                            <div className={styles.text}>
                                <h4>Доставка</h4>
                                <span>{DELIVERY_FEE.toLocaleString()} ₽</span>
                            </div>
                            <hr/>
                            <div className={styles.text}>
                                <h4>Итого({items.length})</h4>
                                <span>{(sumProductsCart + DELIVERY_FEE).toLocaleString()} ₽</span>
                            </div>
                        </div>
                        <Button onClick={handleCreateOrder} appearance={'big'}>Оформить</Button>
                    </div>
                </>
            )}
        </LayoutPage>
    )
}
export default Cart
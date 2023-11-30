import {FC} from "react";
import LayoutPage from "../../layout/LayoutPage.tsx";
import styles from "../Menu/Menu.module.css";

const Cart: FC = () => {
    return (
        <LayoutPage
            className={styles.CartPage}
        >
            <header className={styles.header}>
                <h1>Корзина</h1>
                <input type="text"/>
            </header>
            <div className={styles.itemsContainer}>

            </div>
        </LayoutPage>
    )
}
export default Cart
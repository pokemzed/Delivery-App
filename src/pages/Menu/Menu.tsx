import {FC} from "react";
import LayoutPage from "../../layout/LayoutPage.tsx";
import styles from './Menu.module.css'

const Menu: FC = () => {
    return (
        <LayoutPage
            className={styles.MenuPage}
        >
            <header className={styles.header}>
                <h1>Меню</h1>
                <input type="text"/>
            </header>
            <div className={styles.itemsContainer}>

            </div>
        </LayoutPage>
    )
}
export default Menu
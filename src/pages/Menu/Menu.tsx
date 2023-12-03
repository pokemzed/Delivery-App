import {FC} from "react";
import LayoutPage from "../../layout/LayoutPage.tsx";
import styles from './Menu.module.css'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu.tsx";
import {ProductsMenu} from "../../components/ProductsMenu/ProductsMenu.tsx";
import {useAllProductsMenuQuery} from "../../shared/api";

const Menu: FC = () => {
    const {data: products, isLoading, error} = useAllProductsMenuQuery('')
    return (
        <LayoutPage
            className={styles.MenuPage}
        >
            <HeaderMenu titlePage={'Меню'} searchInput={true}/>
            <div className={styles.itemsContainer}>
                {products && <ProductsMenu products={products}/>}
                {isLoading && <span>Загрузка продуктов...</span>}
                {error && <span>Ошибка получения продуктов</span>}
            </div>
        </LayoutPage>
    )
}
export default Menu
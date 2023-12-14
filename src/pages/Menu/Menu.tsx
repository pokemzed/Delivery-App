import {ChangeEvent, FC, useEffect, useState} from "react";
import LayoutPage from "../../layout/Layout/LayoutPage.tsx";
import styles from './Menu.module.css'
import {ProductsMenu} from "../../components/ProductsMenu/ProductsMenu.tsx";
import {useAllProductsMenuQuery} from "../../shared/api";
import {useDebounce} from "usehooks-ts";
import Headling from "../../components/Headling/Headling.tsx";
import Search from "../../components/Search/Search.tsx";

const Menu: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const debounceSearch = useDebounce<string>(searchValue, 350)
    const {data: products, isLoading, error} = useAllProductsMenuQuery(debounceSearch)

    useEffect(() => {
    }, [debounceSearch, searchValue]);

    const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <LayoutPage
            className={styles.MenuPage}
        >
            <div className={styles.HeaderMenu}>
                <Headling title={'Меню'}/>
                <Search value={searchValue} onChange={changeSearchQuery}/>
            </div>
            <div className={styles.itemsContainer}>
                {products && <ProductsMenu products={products}/>}
                {products && !products.length && <span>Ничего не найдено</span>}
                {isLoading && <span>Загрузка продуктов...</span>}
                {error && <span>Ошибка получения продуктов</span>}
            </div>
        </LayoutPage>
    )
}
export default Menu
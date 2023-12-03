import {FC} from "react";
import styles from './HeaderMenu.module.css'
import Search from "../Search/Search.tsx";
import Headling from "../Headling/Headling.tsx";

const HeaderMenu: FC <{searchInput?: boolean, titlePage: string}> = ({searchInput = false, titlePage}) => {
    return (
        <div className={styles.HeaderMenu}>
            <Headling title={titlePage}/>
            {searchInput && <Search/>}
        </div>
    )
}
export default HeaderMenu
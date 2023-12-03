import {FC} from "react";
import styles from "./Search.module.css";
import {SearchProps} from "./Search.props.ts";

const Search: FC<SearchProps> = ({className, isValid = true, ...props}) => {
    return (
        <div className={styles.inputContainer}>
            <img src="/icons/icon-search.svg" alt="icon-search"/>
            <input
                {...props}
                placeholder={'Введите свой запрос'}
                className={`${styles.Search} ${className} ${!isValid && styles.rejectSearch}`}
            />
        </div>
    )
}
export default Search
import {FC} from "react";
import {HeadlingProps} from "./Headling.props.ts";
import styles from './Headling.module.css'

const Headling: FC<HeadlingProps> = ({title, className, ...props}) => {
    return (
        <h1 className={`${className} ${styles.headling}`} {...props}>
            {title}
        </h1>
    )
}
export default Headling
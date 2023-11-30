import {ButtonProps} from "./Button.props.ts";
import {FC} from "react";
import style from './Button.module.css'


const Button: FC<ButtonProps> = ({children, appearance = 'small', className, ...props}) => {
    return (
        <button {...props}
                className={`${style.ButtonComponent} ${appearance === 'small' ? style.small : style.big} ${className}`}>
            {children}
        </button>
    )
}
export default Button
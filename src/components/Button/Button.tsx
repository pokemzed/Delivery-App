import {ButtonProps} from "./Button.props.ts";
import {FC} from "react";
import './Button.css'


const Button: FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button {...props} className={`ButtonComponent ${className}`}>
            {children}
        </button>
    )
}
export default Button
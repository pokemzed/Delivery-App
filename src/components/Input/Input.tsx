import {FC} from "react";
import {InputProps} from "./Input.props.ts";
import style from './Input.module.css'

const Input: FC<InputProps> = ({className, isValid = true, ...props}) => {
    return (
        <input
            {...props}
            className={`${style.InputComponent} ${className} ${!isValid && style.rejectValidation}`}
        />
    )
}
export default Input
import {FC} from "react";
import Button from "../Button/Button.tsx";
import styles from "./LogoutUser.module.css";
import {logoutUser} from "../../shared/store/slices/authSlice.ts";
import {useAppDispatch} from "../../hooks/useAppSelector.ts";
import {useNavigate} from "react-router-dom";

export const LogoutUser: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogoutUser = () => {
        dispatch(logoutUser())
        navigate('/auth/login')
        // window.location.reload()
    }
    return (
        <Button onClick={handleLogoutUser} className={styles.buttonLogout}>
            <img src="/icons/logout.svg" alt="logout-icon"/>
            Выход
        </Button>
    )
}
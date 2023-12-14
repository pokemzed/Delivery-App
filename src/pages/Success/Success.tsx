import {FC} from "react";
import styles from './Success.module.css'
import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import LayoutPage from "../../layout/Layout/LayoutPage.tsx";

const Success: FC = () => {
    const navigate = useNavigate()
    return (
        <LayoutPage className={styles.SuccessPage}>
            <img src="/success-pizza.png" alt="success-pizza"/>
            <h2>Ваш заказ успешно оформлен!</h2>
            <Button appearance={"big"} onClick={() => navigate('/')}>Сделать новый</Button>
        </LayoutPage>
    )
}
export default Success
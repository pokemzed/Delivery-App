import {FC} from "react";
import {AuthLayout} from "../../layout/AuthLayout/AuthLayout.tsx";
import styles from './Login.module.css'
import {Link} from "react-router-dom";
import {LoginForm} from "../../components/LoginForm/LoginForm.tsx";

const Login: FC = () => {
    return (
        <AuthLayout>
            <div className={styles.container}>
                <h1>Вход</h1>
                <LoginForm/>
                <div className={styles.reg}>
                    <span>Нет аккаунта?</span>
                    <Link to={'/auth/reg'}>Зарегистрироваться</Link>
                </div>
            </div>
        </AuthLayout>
    )
}
export default Login
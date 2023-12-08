import {FC} from "react";
// import styles from './Register.module.css'
import {AuthLayout} from "../../layout/AuthLayout/AuthLayout.tsx";
import {RegForm} from "../../components/RegForm/RegForm.tsx";
import styles from "./Register.module.css";
import {Link} from "react-router-dom";

const Register: FC = () => {
    return (
        <AuthLayout>
            <div className={styles.container}>
                <h1>Регистрация</h1>
                <RegForm/>
                <div className={styles.reg}>
                    <span>Есть аккаунт?</span>
                    <Link to={'/auth/login'}>Авторизоваться</Link>
                </div>
            </div>
        </AuthLayout>
    )
}
export default Register
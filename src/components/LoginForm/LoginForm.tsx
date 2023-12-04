import React, {FC} from "react";
import {Formik} from "formik";
import {validationLogin} from "../../shared/validation/validationLogin.ts";
import styles from './LoginForm.module.css'
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {useAuthLoginMutation} from "../../shared/api";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppSelector.ts";
import {loginUser} from "../../shared/store/slices/authSlice.ts";

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [login, {data, isSuccess}] = useAuthLoginMutation()
    const submitForm = async (values: { email: string, password: string }) => {
        try{
            await login(values).unwrap()
        }catch(err){
            console.log(err)
        }
    }

    //UseEffect login
    React.useEffect(() => {
        if(isSuccess && data){
            const jwt = data.access_token
            const payloadToken = jwt.split('.')[1]
            const {email, id} = JSON.parse(window.atob(payloadToken))
            dispatch(loginUser({id, token: jwt, email}))
            navigate('/')
        }
    }, [data, isSuccess, navigate])

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validate={validationLogin}
            onSubmit={submitForm}
        >
            {
                ({
                     values,
                     errors,
                     touched,
                     handleBlur,
                     handleChange,
                     handleSubmit,
                 }) => {
                    return (
                        <form onSubmit={handleSubmit} className={styles.formContainer}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="email">E-Mail</label>
                                <Input
                                    name={'email'}
                                    placeholder={'Введите E-Mail'}
                                    type={'email'}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={!!errors.email && !!touched.email}

                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="password">Пароль</label>
                                <Input
                                    name={'password'}
                                    placeholder={'Введите пароль'}
                                    type={'password'}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={!!errors.password && !!touched.password}

                                />
                            </div>
                            <Button
                                appearance={'big'}
                                className={styles.buttonSub}
                                type={'submit'}
                            >
                                Войти
                            </Button>
                        </form>
                    )
                }
            }
        </Formik>
    )
}
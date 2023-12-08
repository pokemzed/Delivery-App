import {FC} from "react";
import styles from "./RegForm.module.css";
import {isErrorWithMessage} from "../../shared/types/helpersErrors.ts";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {Formik} from "formik";
import {IRegUser} from "../../shared/types/user.ts";
import {useAuthRegMutation} from "../../shared/api";
import {useNavigate} from "react-router-dom";
import {validationReg} from "../../shared/validation/validationReg.ts";

export const RegForm: FC = () => {
    const navigate = useNavigate()
    const [registration, {error}] = useAuthRegMutation()

    const submitForm = async (values: IRegUser) => {
        try {
            await registration(values).unwrap()
            alert('Успешная регистрация')
            navigate('/auth/login')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Formik
            initialValues={{email: '', password: '', name: ''}}
            validate={validationReg}
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
                            {isErrorWithMessage(error) && <span>{error.data.message}</span>}
                            <div className={styles.inputContainer}>
                                <label htmlFor="email">Имя</label>
                                <Input
                                    name={'name'}
                                    placeholder={'Введите ваше имя'}
                                    type={'text'}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={!!errors.name && !!touched.name}

                                />
                            </div>
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
                                Зарегистрироваться
                            </Button>
                        </form>
                    )
                }
            }
        </Formik>
    )
}
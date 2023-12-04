import {FC, ReactNode} from "react";
import styles from './AuthLayout.module.css'

export const AuthLayout: FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className={styles.authLayout}>
            <div className={styles.logo}>
                <img src="/icons/auth-logo.svg" alt="logo"/>
            </div>
            <main className={`${styles.content}`}>
                {children}
            </main>
        </div>
    )
}
import {FC} from "react";
import styles from "./InfoUser.module.css";
import {useGetUserQuery} from "../../shared/api";
import {useAppSelector} from "../../hooks/useAppSelector.ts";

export const InfoUser: FC = () => {
    const {token} = useAppSelector(state => state.auth)
    const {data, error} = useGetUserQuery(token)

    if(error){
        return (
            <div className={styles.profileInfo}>
                <img src="/icons/Intersect.png" alt="icon-profile"/>
                <div className={styles.text}>
                    <h3>Пользователь не найден</h3>
                    <span>Ошибка получения информации о пользователе</span>
                </div>
            </div>
        )
    }

    return data && (
        <div className={styles.profileInfo}>
            <img src="/icons/Intersect.png" alt="icon-profile"/>
            <div className={styles.text}>
                <h3>{data.name}</h3>
                <span>{data.email}</span>
            </div>
        </div>
    )
}
import React, {FC, useState} from 'react';
import styles from './win.module.scss'
import classNames from "classnames";
const Elka:FC = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [prize, setPrize] = useState<number | null>(null)

    const getPrize = (item: number) => {
        setPrize(item)
    }

    return (
        <div className={styles.elka}>
            <div className={styles.text}>
                <p>Поздравляем, Вы ответили правильно на все вопросы!</p>
                <p> Выберите подарок!</p>
            </div>
            <div className={styles.prizeGrid}>
                {array.map((item, index) => (
                    <div onClick={() => getPrize(item)}
                         className={classNames(styles.prize, prize ? prize === index + 1 ? styles.active : styles.inactive : styles[`ani${index + 1}`])}
                         key={index}>
                        <img src="/images/prize.png" alt="приз"/>
                        <div className={styles.prizeName}>Сертификат на скидку 10% на все услуги плавательного бассейна "Шериф"</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Elka;
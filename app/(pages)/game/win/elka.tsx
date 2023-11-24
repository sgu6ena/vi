import React, {FC, useState} from 'react';
import styles from './win.module.scss'
import classNames from "classnames";
import StartGame from "@/app/(pages)/game/(buttons)/startGame";
import ShareButton from "@/app/(pages)/game/(buttons)/shareButton";
const Elka:FC = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [prize, setPrize] = useState<number | null>(null)
    const bonus = true
    const getPrize = (item: number) => {
        setPrize(item)
    }

    return (
        <div className={styles.elka}>
            <div className={styles.text}>
                {!prize ? <>
                        <p>Поздравляем, Вы ответили правильно на все вопросы!</p>
                        <p> Выберите подарок!</p>
                    </> :
                    <>
                        <p> Спасибо за игру! Ваш подарок</p>
                        <p> О том, как получить приз Вам сообщит оператор. Ожидайте звонка.</p>
                    </>}
            </div>
            {prize ? <div className={'grid grid-cols-2 items-center my-4 gap-6'}>
                <StartGame text={'Играть еще'} bonus={false}/>
                {bonus ? <StartGame text={'Бонусный вопрос'} bonus={true}/> : null}
                <div className={`col-span-2 w-1/2 m-auto`}>
                    <ShareButton/>
                </div>


            </div> :null}

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
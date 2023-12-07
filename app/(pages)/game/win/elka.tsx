'use client';
import React, {FC, useState} from 'react';
import styles from './win.module.scss'
import classNames from "classnames";
import StartGame from "@/app/(pages)/game/(buttons)/startGame";
import ShareButton from "@/app/(pages)/game/(buttons)/shareButton";
import {useGame} from "@/app/hooks/useGame";
import {useActions} from "@/app/store/hooks";
import {useBonusTree} from "@/app/hooks/useBonusTree";

const Elka: FC = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [prize, setPrize] = useState<number | null>(null)
  const {winStatus, game_id} = useGame()
  const {getBonusTree} = useActions()
  const {prizes, isPrizes, isLoading} = useBonusTree()

  const getPrize = (item: number) => {
    setPrize(item)
    getBonusTree({game_id: game_id?.toString() || '', click_id: item.toString()})
  }

  return (
    <div className={styles.elka}>
      <div className={styles.text}>
        {!isPrizes ? <>
            <p>Поздравляем, Вы ответили правильно на все вопросы!</p>
            <p> Выберите подарок!</p>
          </> :
          <>
              <p> Спасибо за игру! Вы выиграли <span
                  className={'text-gold text-bold '}>{prize ? prizes[prize - 1]?.title : null}</span>. </p>
            <p> Как получить подарок, Вам сообщит наш оператор. Ожидайте звонка. </p>
          </>}
      </div>
        {isPrizes ? <div className={styles.buttons}>
        <StartGame text={'Играть ещё'} bonus={false}/>
        {winStatus.bonus ? <StartGame text={'Бонусный вопрос'} bonus={true}/> : null}
        <div className={`md:col-span-2 md:w-1/2 md:m-auto`}>
          <ShareButton/>
        </div>


      </div> : null}

      <div className={styles.prizeGrid}>
        {array.map((item, index) => (
          <div onClick={() => !isPrizes ? getPrize(item) : null}
               className={classNames(styles.prize,
                   // index===8&&'col-span-2 md:col-span-1 md:w-full h-auto w-1/2 ' ,
                   isPrizes ? prize === index + 1 ? styles.active : styles.inactive : styles[`ani${index + 1}`])}
               key={index}>
            <img src="/images/prize.png" alt="приз"/>
            {isPrizes ? <div className={styles.prizeName}>{prizes[index]?.title}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elka;
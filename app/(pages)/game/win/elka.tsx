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
              <p> Спасибо за игру! Ваш подарок <span
                  className={'text-gold text-bold '}>{prize ? prizes[prize - 1]?.title : null} </span></p>
            <p> О том, как получить приз Вам сообщит оператор. Ожидайте звонка.</p>
          </>}
      </div>
      {isPrizes ? <div className={'grid grid-cols-2 items-center my-4 gap-6'}>
        <StartGame text={'Играть еще'} bonus={false}/>
        {winStatus.bonus ? <StartGame text={'Бонусный вопрос'} bonus={true}/> : null}
        <div className={`col-span-2 w-1/2 m-auto`}>
          <ShareButton/>
        </div>


      </div> : null}

      <div className={styles.prizeGrid}>
        {array.map((item, index) => (
          <div onClick={() => !isPrizes ? getPrize(item) : null}
               className={classNames(styles.prize, isPrizes ? prize === index + 1 ? styles.active : styles.inactive : styles[`ani${index + 1}`])}
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
'use client';
import React, {FC, useEffect, useState} from 'react';
import styles from './question.module.scss'

import classNames from "classnames";
import {useGame} from "@/app/hooks/useGame";
import {useActions} from "@/app/store/hooks";

import {IAnswer, IQuestion} from "@/app/api/types";

interface IQ {
    question: IQuestion,
    postAnswer: (answer: IAnswer) => void
    buyTime: () => void
    buyHelp: () => void
}
const Question: FC<IQ> = ({
                              question,
                              postAnswer,
                              buyTime,
                              buyHelp
                                           }) => {

    const [answerId, setAnswerId] = useState<1|2|3|4|null>(null)

    const { game_id} = useGame()
    const {setTimer} = useActions()
    const [time, setTime] = useState<number>(question.time)

    const answer = () => {
        if (answerId && game_id!==null)
            postAnswer({answer: answerId, quest_id: question.id, game_id})
    }


    useEffect(() => {
        setTimer({time});
        const timerQ = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
            }
        }, 1000)

        return () => clearTimeout(timerQ);
    }, [time])


   const isBonusQuest =  Boolean(question.id)

    const help = question.help

    const isFalse1 = help?.includes(1)
    const isFalse2 = help?.includes(2)
    const isFalse3 = help?.includes(3)
    const isFalse4 = help?.includes(4)


    return (
      <div className={styles.question}>
          { isBonusQuest ? <h2>Вопрос {question.id}</h2> : <h2>Бонусный вопрос</h2>}
          <p className={styles.timer}>Осталоcь: <b className={styles.seconds}>{time}&nbsp;сек.</b></p>
          <div className={styles.q}>
              {question.body}
          </div>
          <div className={styles.answers}>

              <label
                  className={classNames(styles.a, answerId === 1 ? styles.active :  isFalse1 ? styles.inactive:'')}
                  onClick={() => setAnswerId(1)}>
                  {isFalse1?'':question.answer1}
              </label>
              <label
                  className={classNames(styles.a, answerId === 2 ? styles.active :  isFalse2 ? styles.inactive:'')}
                  onClick={() => setAnswerId(2)}>
                  {question.answer2}
              </label>
              <label
                  className={classNames(styles.a, answerId === 3 ? styles.active :  isFalse3? styles.inactive:'')}
                  onClick={() => setAnswerId(3)}>
                  {question.answer3}
              </label>
              <label
                  className={classNames(styles.a, answerId === 4 ? styles.active : isFalse4 ? styles.inactive:'')}
                  onClick={() => setAnswerId(4)}>
                  {question.answer4}
              </label>

          </div>
          <div className={styles.buttons}>
              <button className={answerId ? styles.enter : styles.disabled} disabled={!Boolean(answerId)}
                      onClick={answer}>Ответить
              </button>
              <button className={styles.time} onClick={()=>{
                  buyTime()
                  setTime(time+30)
              }}>
                  <strong>Докупить 30 секунд времени</strong>
                  <span>Стоимость услуги 2 рубля ПМР</span>
              </button>
              <button className={styles.fifty} onClick={buyHelp}>
                  <strong>50/50 убрать два неверных ответа</strong>
                  <span>Стоимость услуги 1 рубль ПМР</span>
              </button>
          </div>

    </div>
  );
};

export default Question;
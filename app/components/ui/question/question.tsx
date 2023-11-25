'use client';
import React, {FC, useEffect, useState} from 'react';
import styles from './question.module.scss'
import {IQuestion} from "@/app/store/game/interface";
import classNames from "classnames";
import {useGame} from "@/app/hooks/useGame";
import {useActions} from "@/app/store/hooks";
import {IAnswer} from "@/app/api/api.service";

interface IQ {
    question: IQuestion,
    postAnswer: (answer: IAnswer) => void
    buyTime: () => void
}
const Question: FC<IQ> = ({
                              question,
                              postAnswer,
                              buyTime
                                           }) => {

    const [answerId, setAnswerId] = useState<1|2|3|4|null>(null)

    const {timer, game_id} = useGame()
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


    return (
      <div className={styles.question}>
          { isBonusQuest ? <h2>Вопрос {question.id}</h2> : <h2>Бонусный вопрос</h2>}
          <p className={styles.timer}>Осталоcь: <b className={styles.seconds}>{time}&nbsp;сек.</b></p>
          <div className={styles.q}>
              {question.body}
          </div>
          <div className={styles.answers}>
              <label className={classNames( styles.a,answerId===1?styles.active:"")} onClick={()=>setAnswerId(1)}>
                  {question.answer1}
              </label>
              <label className={classNames( styles.a,answerId===2?styles.active:"")} onClick={()=>setAnswerId(2)}>
                  {question.answer2}
              </label>
              <label className={classNames( styles.a,answerId===3?styles.active:"")} onClick={()=>setAnswerId(3)}>
                  {question.answer3}
              </label>
              <label className={classNames( styles.a,answerId===4?styles.active:"")} onClick={()=>setAnswerId(4)}>
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
              <button className={styles.fifty}>
                  <strong>50/50 убрать два неверных ответа</strong>
                  <span>Стоимость услуги 1 рубль ПМР</span>
              </button>
          </div>

    </div>
  );
};

export default Question;
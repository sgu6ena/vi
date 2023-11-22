import React, {FC, useState} from 'react';
import styles from './question.module.scss'
import {IQuestion} from "@/app/store/game/game.interface";
import classNames from "classnames";

interface IQ {
    question: IQuestion,
    onNext: () => void
}
const Question: FC<IQ> = ({
                              question, onNext
                                           }) => {

    const [answerId, setAnswerId] = useState<1|2|3|4|null>(null)



  return (
      <div className={styles.question}>
          <h2>Вопрос {question.id}</h2>
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
              <button className={styles.enter} onClick={onNext}>Ответить</button>
              <button className={styles.time}>
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
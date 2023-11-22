import React, {FC} from 'react';
import styles from './question.module.scss'
import {IQuestion} from "@/app/store/reducers/game/game.interface";

interface IQ{ data: IQuestion,  onNext:()=>void }
const Question: FC<IQ> = ({
                                               data: {
                                                   question, answers, title
                                               }, onNext
                                           }) => {
  return (
      <div className={styles.question}>
          <h2>{title}</h2>
          <div className={styles.q}>
              {question}
          </div>
          <div className={styles.answers}>
              {answers.map((a, index) => (
                  <label className={styles.a} key={`${a.text}_${index}`}>
                      {a.text}
                  </label>
              ))}
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
import React, {FC} from 'react';
import styles from './question.module.scss'
export type IAnswer={
  text: string

}

export type IQuestion={
    title:string
  question: string
    answers: IAnswer[]

}

const Question: FC<{ data: IQuestion,  onNext:()=>void }> = ({
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
              {answers.map(a => <label className={styles.a} key={a.text}>{a.text}</label>)}
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
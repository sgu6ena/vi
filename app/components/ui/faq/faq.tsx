'use client';
import React, {ReactNode, useState} from 'react';
import styles from './faq.module.scss'
import classNames from "classnames";

export interface IFaq {
    question: string,
    answer: ReactNode
}

const Faq = ({question, answer}: IFaq) => {
    const [open, setOpen] = useState(false)
    return (
            <div className={styles.faq} onClick={() => setOpen(!open)} >
                <div className={styles.question} >
                    <h5>{question}</h5>
                    <span className={classNames(styles.button, open && styles.active )}></span>
                </div>
                <div className={classNames(open ? styles.active : styles.inactive, styles.answer)}>
                    <div>{answer}</div>
                </div>
            </div>
    );
};

export default Faq;
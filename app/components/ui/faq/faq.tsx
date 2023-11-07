import React, {useState} from 'react';
import styles from './faq.module.scss'
import classNames from "classnames";
const Faq = ({question,answer}:{question:string,answer:string}) => {
    const [open, setOpen] = useState(false)
    return (
            <div className={styles.faq} onClick={() => setOpen(!open)} >
                <div className={styles.question} >
                    <h5>{question}</h5>
                    <span className={classNames(styles.button, open && styles.active )}></span>
                </div>
                <div className={classNames(open ? styles.active : styles.inactive, styles.answer)}>
                    <p>{answer}</p>
                </div>
            </div>
    );
};

export default Faq;
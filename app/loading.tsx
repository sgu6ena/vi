import React from 'react';
import styles from './assets/loading.module.scss'
import classNames from "classnames";

const Loading = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.wrapper}>
                <p className={styles.text}>IDC викторина</p>
                <div className={classNames(styles.inner, styles.one)}></div>
                <div className={classNames(styles.inner, styles.two)}></div>
                <div className={classNames(styles.inner, styles.three)}></div>
            </div>
        </div>

    );
};

export default Loading;
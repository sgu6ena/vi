import React from 'react';
import styles from './loading.module.scss'
import classNames from "classnames";

const Loading = () => {
    return (
        <div className={styles.loader}>
            <p className={styles.text}>IDC
                викторина</p>
            <div className={classNames(styles.inner, styles.one)}></div>
            <div className={classNames(styles.inner, styles.two)}></div>
            <div className={classNames(styles.inner, styles.three)}></div>
        </div>

    );
};

export default Loading;
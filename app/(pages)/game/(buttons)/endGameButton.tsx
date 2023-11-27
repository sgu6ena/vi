'use client';
import React from 'react';
import styles from './buttons.module.scss'
const EndGameButton = () => {
    //TODO: навесить действие конца игры
    return (
        <div className={styles.endGameButton}>
            Завершить игру
        </div>
    );
};

export default EndGameButton;
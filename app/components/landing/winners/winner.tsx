'use client';
import React, {useEffect, useState} from 'react';
import styles from './winners.module.scss'
const Winner = () => {

    const today =( new Date()).toLocaleDateString().slice(0,5)

    const [activeTabIndex, setActiveTabIndex] = useState<0 | 1 | 2>(2)
    const startDate = new Date('2023-11-25'); // начальная дата
    const endDate = new Date();     // конечная дата

    const dates = []
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const formattedDate = currentDate.toLocaleDateString().slice(0, 5);
        dates.push(formattedDate)
    }


    const day = dates.length

    const [dayN, setDayN] = useState(day-1)
    return (
    <section id={'winners'} className={styles.winners}>
      <h2>
        Победители
      </h2>
        <div className={styles.wrapper}>
            <div className={styles.block} style={{borderRadius:' 0px 200px'}}>
                <div>
                    <div className={styles.tabs}>
                        <button className={activeTabIndex === 0 ? styles.active : styles.inactive}
                                onClick={() => setActiveTabIndex(0)}>Мои подарки
                        </button>
                        <button className={activeTabIndex === 1 ? styles.active : styles.inactive}
                                onClick={() => setActiveTabIndex(1)}>Победители от партнеров
                        </button>
                        <button className={activeTabIndex === 2 ? styles.active : styles.inactive}
                                onClick={() => setActiveTabIndex(2)}>Денежные победители
                        </button>
                    </div>
                    <div className={styles.dates}>
                        {dates.map((date, index)=>  <button key={date} className={index===dayN?styles.active:''}   onClick={() => setDayN(index)}>{date}</button>)}
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>лицевой счет</th>
                            <th>партнер</th>
                            <th>подарок</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Winner;
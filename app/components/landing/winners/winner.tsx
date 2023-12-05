'use client';
import React, {useEffect, useState} from 'react';
import styles from './winners.module.scss'

import {mainAPI} from "@/app/store/services/mainAPI";
import {useUser} from "@/app/hooks/user";
const Winner = () => {

    const startDate = new Date('2023-12-03'); // начальная дата
    const endDate = new Date();     // конечная дата
    const dates = []

    const {token} = useUser()


    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const formattedDate = currentDate.toLocaleDateString().slice(0, 5);
        dates.push(formattedDate)
    }

    dates.pop()
    const day = dates.length
    const [dayN, setDayN] = useState(day-1)
    const [getWinners, {data: winners, isLoading,}] = mainAPI.usePostWinnersMutation();

    const [activeTabIndex, setActiveTabIndex] = useState<0 | 1 | 2>(1)
    useEffect(() => {
        getWinners({date: activeTabIndex ? dayN + 1 : 0, type: activeTabIndex === 2 ? 'money' : "winner"})
    }, [getWinners, dayN, activeTabIndex]);


    const isWinners = winners?.data && winners.data.length && !isLoading

    return (
    <section id={'winners'} className={styles.winners}>
      <h2>
        Победители

      </h2>
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <div>
                    <div className={styles.mobileInputs}>

                        <select
                            id="mobileDay"
                            value={dayN}
                            onChange={(e) => setDayN(Number(e.target.value))}
                        >
                            {dates.map((date, index) => (
                                <option key={date} value={index}>
                                    {date}
                                </option>
                            ))}
                        </select>

                        <select
                            id="mobileTab"
                            value={activeTabIndex}
                            onChange={(e) => setActiveTabIndex(Number(e.target.value) as 0 | 1 | 2)}
                        >
                            {Boolean(token) ? <option value={0}>Мои подарки</option> : null}
                            <option value={1}>Победители от партнеров</option>
                            <option value={2}>Денежные победители</option>
                        </select>
                    </div>


                    <div className={styles.tabs}>
                        {Boolean(token) ? <button className={activeTabIndex === 0 ? styles.active : styles.inactive}
                                                  onClick={() => setActiveTabIndex(0)}>Мои подарки
                        </button> : null}

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
                    <div className={styles.tableWrapper}>
                        <table>
                        <thead>
                        <tr>
                            <th>лицевой счет</th>
                            <th className={'md:block hidden'}>партнер</th>
                            <th>подарок</th>
                        </tr>
                        </thead>
                        <tbody>
                        {isWinners ? winners.data.map((win, index) => <tr key={index}>
                            <td className={'text-center'}>{win.account}</td>
                            <td  className={'md:block hidden text-center'}>{win.sponsor}</td>
                            <td className={'text-center'}>{win.prize}</td>
                        </tr>) : <tr>
                            <td className={'text-center'}>-</td>
                            <td className={'md:block hidden  text-center'}>-</td>
                            <td className={'text-center'}>-</td>
                        </tr>}
                        </tbody>
                    </table>
                    </div>

                </div>
            </div>
        </div>

    </section>
  );
};

export default Winner;
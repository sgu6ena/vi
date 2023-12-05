'use client';
import React, {FC, useEffect, useState} from "react";
import styles from './timer.module.scss'


const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const one = [1, 21, 31, 41, 51];
const many = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];

const words: {day: string[], hour: string[], minute: string[], second: string[]} = {
    day: ["день", "дня", "дней"],
    hour: ["час", "часа", "часов"],
    minute: ["минута", "минуты", "минут"],
    second: ["секунда", "секунды", "секунд"],
};

const formatTimeUnit = (value: number, unit: string) => {
    const index = one.indexOf(value % 100);
    const form = index !== 1 && many.indexOf(value % 100) !== -1 ? 1 : index !== -1 ? 0 : 2;
    // @ts-ignore
    return words[unit][form];
};

interface ITimer{
    time: number;
    type: string
    onTimeEnd:()=>void
}

export const Timer: FC<ITimer> = ({type, onTimeEnd, time}) => {

    const [currentTime, setTime] = useState(time);

    let text = ''

    switch (type) {
        case '20':
            text = 'До ежедневного розыгрыша осталось';
            break;
        case '21':
            text = 'До главного розыгрыша осталось';
            break;
        case '22':
            text = 'До ежедневного розыгрыша телефона осталось';
            break;
    }

    useEffect(() => {

        const interval = setInterval(() => {
            if (currentTime>0) {
                setTime(currentTime - 1000)
            }
        }, 1000);
        return () => clearInterval(interval);

    }, [currentTime]);

    useEffect(() =>{
        if (currentTime<=0){
            onTimeEnd()
        }
    },[currentTime]);

    useEffect(() => {
        setTime(time)
    }, [time]);


    const days = Math.floor(currentTime / DAY);
    const hours = Math.floor((currentTime % DAY) / HOUR);
    const minutes = Math.floor((currentTime % HOUR) / MINUTE);
    const seconds = Math.floor((currentTime % MINUTE) / SECOND);




    return (
        <div className={styles.timerWrapper}>
            <div  className={'text-white lg:text-2xl flex flex-col items-center md:items-start transition-all   text-lg sm:block '}>
                <div className={'pb-2 md:text-left  text-center transition-all'}>{text}</div>

                <div className="flex md:justify-start justify-between md:gap-4 gap-2 w-full">
                    {[
                        {label: "day", value: days},
                        {label: "hour", value: hours},
                        {label: "minute", value: minutes},
                        {label: "second", value: seconds},
                    ].map(({label, value}, index) => (
                        <div key={index + label} className="col md:w-fit w-full">
                            <div
                                className="transition-all text-center figure-border bg-green p-4  lg:w-28 sm:w-20 w-full">
                                {`${Math.floor(value)}`.padStart(2, "0")}
                            </div>
                            <div className={'transition-all lg:pl-8 lg:text-xl text-sm md:text-center text-right lg:font-bold '}>
                                {formatTimeUnit(value, label)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

'use client';
import React, {FC, useEffect, useMemo, useState} from "react";

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
    deadline:string
    onTimeEnd:()=>void
}

export const Timer:FC<ITimer> = ({ deadline = new Date().toString(),  onTimeEnd , time}) => {

    // const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [currentTime, setTime] = useState(time);

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
        <div className="flex md:justify-start justify-between md:gap-4 gap-2 w-full">
            {[
                { label: "day", value: days },
                { label: "hour", value: hours },
                { label: "minute", value: minutes },
                { label: "second", value: seconds },
            ].map(({ label, value }, index) => (
                <div key={index+label} className="col-4">
                    <div className="transition-all text-center figure-border bg-green p-4  lg:w-28 sm:w-20 w-16">
                        {`${Math.floor(value)}`.padStart(2, "0")}
                    </div>
                    <div className={'transition-all lg:pl-8 lg:text-xl text-sm text-center lg:font-bold '}>
                        {formatTimeUnit(value, label)}
                    </div>
                </div>
            ))}
        </div>
    );
};

import React, { useEffect, useMemo, useState } from "react";

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

export const Timer = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(parsedDeadline - Date.now()), 1000);
        return () => clearInterval(interval);
    }, [parsedDeadline]);

    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);

    return (
        <div className="flex gap-2">
            {[
                { label: "day", value: days },
                { label: "hour", value: hours },
                { label: "minute", value: minutes },
                { label: "second", value: seconds },
            ].map(({ label, value }) => (
                <div key={label} className="col-4">
                    <div className="border p-4 w-40">
                        {`${Math.floor(value)}`.padStart(2, "0")}
                        <p>{formatTimeUnit(value, label)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

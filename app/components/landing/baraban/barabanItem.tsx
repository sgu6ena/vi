'use client';
import React, { FC, useEffect, useState } from 'react';

const BarabanItem: FC<{ winner: string, accounts: { account: string }[] }> = ({ winner, accounts }) => {
    const l = accounts.length;
    const [index, setIndex] = useState(0);
    const currentAccounts = [...accounts, {account: winner}]

    const delay = Math.floor(Math.random() * 10)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < l)
                setIndex(prevIndex => (prevIndex + 1));
        }, 15 + delay);
        return () => clearInterval(timer);
    }, [currentAccounts, index]);

  return (
      <div
          className={`${currentAccounts[index]?.account === winner ? 'text-red' : ''} bg-gold font-bold md:text-2xl text-xl w-full figure-border md:p-4 p-2 text-center font-mono`}>
          {l > 0 && currentAccounts[index]?.account}
    </div>
  );
};

export default BarabanItem;

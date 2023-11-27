import React, { FC, useEffect, useState } from 'react';

const BarabanItem: FC<{ winner: string, accounts: { account: string }[] }> = ({ winner, accounts }) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (accounts.length > 0) {
      const l = accounts.length;
      setIndex(l);

      const timer = setInterval(() => {
        if(index>0)
          setIndex(prevIndex => (prevIndex - 1));
      }, 50);

      return () => clearInterval(timer);
    }

  }, [accounts]);
useEffect(()=>{
  if(index>0){

}},[index])
  return (
    <div className={'bg-gold w-full figure-border p-4 text-center text-xl'}>
      {accounts.length > 0 && accounts[index]?.account}
    </div>
  );
};

export default BarabanItem;

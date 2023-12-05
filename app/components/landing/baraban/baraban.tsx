'use client';
import React, {useEffect, useState} from 'react';
import {useMain} from "@/app/hooks/useMain";
import Loading from "@/app/loading";
import BarabanItem from "@/app/components/landing/baraban/barabanItem";

const Baraban = () => {

  const {
    isWinnersLoading,
    winners,
    body,
    title,
    winners1,
    winners3,
    winners4,
    winners5,
    winners2,
    allRandomAccs,
    isOneWinner,
    isFiveWinner
  } = useMain()


  return (<>
        {isWinnersLoading ? <Loading/> :
        <div className={'grid grid-cols-1 gap-4'}>
          <div className={'bg-green w-full figure-border md:px-16 px-8 py-4'}>
            <div className={'md:text-2xl text-xl md:w-80 font-bold text-center leading-7 text-white'}>
              {title}
            </div>
            <div className={'text-sm text-center mt-0.5 text-gray-500'}>{body}</div>
          </div>
          {isFiveWinner && winners ? <>
            <BarabanItem winner={winners[0]} accounts={winners1}/>
            <BarabanItem winner={winners[1]} accounts={winners2}/>
            <BarabanItem winner={winners[2]} accounts={winners3}/>
            <BarabanItem winner={winners[3]} accounts={winners4}/>
            <BarabanItem winner={winners[4]} accounts={winners5}/>
          </> : null
          }
          {isOneWinner && winners ? <>
            <BarabanItem winner={winners[0]} accounts={allRandomAccs}/>
          </> : null
          }
        </div>
      }
    </>
  );
};

export default Baraban;
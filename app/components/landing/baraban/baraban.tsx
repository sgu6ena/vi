'use client';
import React, {useEffect, useState} from 'react';
import {useMain} from "@/app/hooks/useMain";
import Loading from "@/app/loading";
import BarabanItem from "@/app/components/landing/baraban/barabanItem";

const Baraban = () => {

  const {isWinnersLoading, winners, body, winners1, winners3, title, winners4, winners5, winners2} = useMain()


  return (<>
        {isWinnersLoading ? <Loading/> :
        <div className={'grid grid-cols-1 gap-4'}>
          <div className={'bg-green w-full figure-border md:px-16 px-8 py-4'}>
            <div className={'text-2xl w-80 font-bold text-center leading-7 text-white'}>
              {title}
            </div>
            <div className={'text-sm text-center mt-0.5 text-gray-500'}>{body}</div>
          </div>
          {winners?.money ? <>
            <BarabanItem winner={winners.money[0]} accounts={winners1}/>
            <BarabanItem winner={winners.money[1]} accounts={winners2}/>
            <BarabanItem winner={winners.money[2]} accounts={winners3}/>
            <BarabanItem winner={winners.money[3]} accounts={winners4}/>
            <BarabanItem winner={winners.money[4]} accounts={winners5}/>
          </> : null
          }

        </div>
      }
    </>
  );
};

export default Baraban;
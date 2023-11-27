import React, {useEffect, useState} from 'react';
import Modal from "@/app/components/modals/modal";
import {useMain} from "@/app/hooks/useMain";
import Loading from "@/app/loading";
import BarabanItem from "@/app/components/landing/baraban/barabanItem";

const Baraban = () => {

  const {isLoading, accounts} = useMain()
  const [winners1, setWinners1] = useState([])
  const [winners2, setWinners2] = useState([])
  const [winners3, setWinners3] = useState([])
  const [winners4, setWinners4] = useState([])
  const [winners5, setWinners5] = useState([])
  const [counts, setCounts] = useState(0)


  const isWinnerLoading = isLoading && !(accounts.length > 0)


  useEffect(() => {
    const counts = Math.floor((accounts.length - 6) / 6)
    setWinners1(()=>accounts.slice(6, counts))
    setWinners2(()=>accounts.slice(counts * 1, counts * 2))
    setWinners3(()=>accounts.slice(counts * 2, counts * 3))
    setWinners4(()=>accounts.slice(counts * 3, counts * 4))
    setWinners5(()=>accounts.slice(counts * 4, counts * 5))
  }, [accounts])

  return (<>
      {isWinnerLoading ? <Loading/> :
        <div className={'grid grid-cols-1 gap-4'}>
          <div className={'bg-green w-full figure-border px-10 py-4'}>
            <div className={'text-2xl font-bold text-center leading-6 text-white'}>
              Победители денежного
              <br/>
              приза 1 000 рублей
            </div>
            <div className={'text-sm text-center text-white'}>от 12.12.2023</div>
          </div>
          <BarabanItem winner={accounts[0]?.account.toString() || ''} accounts={winners1}/>
          <BarabanItem winner={accounts[1]?.account.toString() || ''} accounts={winners2}/>
          <BarabanItem winner={accounts[2]?.account.toString() || ''} accounts={winners3}/>
          <BarabanItem winner={accounts[3]?.account.toString() || ''} accounts={winners4}/>
          <BarabanItem winner={accounts[4]?.account.toString() || ''} accounts={winners5}/>

        </div>
      }
    </>
  );
};

export default Baraban;
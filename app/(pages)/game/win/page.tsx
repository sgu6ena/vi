'use client';
import React from 'react';
import {useGame} from "@/app/hooks/useGame";
import Elka from "@/app/(pages)/game/win/elka";
import Win from "@/app/(pages)/game/win/win";
import Loading from "@/app/loading";
import Script from "next/script";

const Page = () => {
  const {winStatus, isLoading} = useGame()
  const isElka = winStatus.elka
  const type = winStatus.type
  const round = winStatus.round
  return (
    <>
      {isLoading ? <Loading/> : isElka ? <Elka/> : <Win bonus={winStatus.bonus} type={type} round={round}/>}
    </>
  );
};

export default Page;
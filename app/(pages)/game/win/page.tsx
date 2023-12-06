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
  return (
    <>
      {isLoading ? <Loading/> : isElka ? <Elka/> : <Win bonus={winStatus.bonus}/>}
    </>
  );
};

export default Page;
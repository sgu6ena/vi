'use client';
import React from 'react';
import {useGame} from "@/app/hooks/useGame";
import Elka from "@/app/(pages)/game/win/elka";
import Win from "@/app/(pages)/game/win/win";

const Page = () => {
    const {winStatus} = useGame()
    const isElka = winStatus.elka
    return (
        <>
            {isElka ? <Elka/> : <Win bonus={winStatus.bonus}/>}
        </>
    );
};

export default Page;
'use client';
import React, {useEffect, useState} from 'react';
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";
import {useRouter} from "next/navigation";
import {LINKS} from "@/app/config/links";
import StartGame from "@/app/(pages)/game/startGame";



const Page = () => {
    const {needAuth} = useActions()
    const {isLoading, game_id} = useGame()

    useEffect(() => {
        if (game_id === null && !isLoading) {
            needAuth()
        }
    }, []);


    return <>  {  isLoading ? <Loading/>  : <StartGame text={'Начать игру'}/> } </>

};

export default Page;
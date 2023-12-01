'use client';
import React, {useEffect} from 'react';
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";
import StartGame from "@/app/(pages)/game/(buttons)/startGame";
import {TEXT_MODALS} from "@/app/config/texts";
import Elka from "@/app/(pages)/game/win/elka";



const Page = () => {
    const {needAuth} = useActions()
    const {isLoading, game_id} = useGame()

    useEffect(() => {
        if (game_id === null && !isLoading) {
            needAuth()
        }
    }, []);


    return <>
        {isLoading ? <Loading/> :
        <div className={'flex justify-center items-center flex-col gap-8 h-full'}>
            <div className={'bg-green text-white text-center w-full figure-border px-10 py-6 relative'}>
                {TEXT_MODALS.TEXT_PRICE}
            </div>
            <StartGame bonus={false} text={'Начать игру'}/>
        </div>}
    </>

};

export default Page;
'use client';
import React, {useEffect} from 'react';
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";
import StartGame from "@/app/(pages)/game/(buttons)/startGame";



const Page = () => {
    const {needAuth} = useActions()
    const {isLoading, game_id} = useGame()

    useEffect(() => {
        if (game_id === null && !isLoading) {
            needAuth()
        }
    }, []);


    return <>  {  isLoading ? <Loading/>  : <StartGame bonus={false} text={'Начать игру'}/> } </>

};

export default Page;
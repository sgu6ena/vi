'use client';
import React, {useEffect, useState} from 'react';
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";
import {useRouter} from "next/navigation";
import {LINKS} from "@/app/config/links";



const Page = () => {
    const {startGame, needAuth} = useActions()
    const {isLoading, game_id} = useGame()
    const {push} = useRouter()
    const isGameStarted = Boolean(game_id) && !isLoading
    const [check, setCheck] = useState(false)

    useEffect(() => {
        if (game_id===null && !isLoading && !check) {
            setCheck(true)
            console.log("Calling needAuth",check);
            needAuth()
        }
    }, []);

    useEffect(() => {
        if (isGameStarted) {
            push(LINKS.GAME)
        }
    }, [isGameStarted])

    return (<>    {
        isLoading ? <Loading/> : isGameStarted ? <Loading/> :
            <div className={'h-full  '}>
                <button className={'text-center w-full  m-auto figure-border p-4 bg-gold'}
                        onClick={startGame}>начать игру
                </button>
            </div>
    }
    </>)

};

export default Page;
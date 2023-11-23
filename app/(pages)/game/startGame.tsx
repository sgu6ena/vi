'use client';
import React, {FC, useEffect} from 'react';
import {LINKS} from "@/app/config/links";
import {useActions} from "@/app/store/hooks";
import {useRouter} from "next/navigation";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";

const StartGame:FC<{text:string, bonus:boolean}> = ({text, bonus}) => {
    const {startGame} = useActions()
    const {push} = useRouter()
    const {game_id, isLoading} = useGame()

    const isGameStarted = Boolean(game_id) && !isLoading
    useEffect(() => {
        if (isGameStarted) {
            push(LINKS.GAME)
        }
    }, [isGameStarted])

    return (<>
            {isGameStarted ? <Loading/> :
                    <button className={`text-center w-full  m-auto figure-border p-4 ${bonus?'bg-[#1487A2]':'bg-gold'}`}
                            onClick={startGame}>{text}
                    </button>
            }</>
    );
};

export default StartGame;
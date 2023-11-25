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
    const {game_id, isLoading, winStatus:{end_game}} = useGame()

    const isGameStarted = Boolean(game_id) && !isLoading && !end_game
    useEffect(() => {
        if (isGameStarted) {
            push(LINKS.GAME)
        }
    }, [isGameStarted])

    return (<>
            {isGameStarted ? <Loading/> :
                    <button className={`text-center text-lg w-full   figure-border p-4 ${bonus?'bg-[#1487A2] text-white':'bg-gold'}`}
                            onClick={()=>startGame({type:bonus? 1 : 3})}>{text}
                    </button>
            }</>
    );
};

export default StartGame;
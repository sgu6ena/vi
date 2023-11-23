'use client';
import React, {useEffect} from 'react';
import Question from "@/app/components/ui/question/question";
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";
import {useRouter} from "next/navigation";

const Page = () => {
    const {requestQuestion, postAnswer} = useActions()
    const {isLoading, currentQuestion, game_id, quest_id, winStatus:{end_game}} = useGame()
    const {push} = useRouter()
    useEffect(() => {
        if (quest_id < 3 && quest_id >= 0 && game_id) {
            requestQuestion({game_id})
        }
    }, [quest_id])

    useEffect(() => {
        if(end_game){
            push('/game/win')
        }
    }, [end_game]);



    return (<>
            {isLoading ?
                <Loading/>
                :
                currentQuestion && !end_game
                    ?
                    <Question question={currentQuestion} postAnswer={postAnswer}/>
                    :
                <Loading/>}
        </>
    );
};

export default Page;
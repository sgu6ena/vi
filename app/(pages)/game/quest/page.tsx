'use client';
import React, {useEffect} from 'react';
import Question from "@/app/components/ui/question/question";
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";

const Page = () => {
    const {requestQuestion} = useActions()
    const {isLoading, currentQuestion, game_id} = useGame()

//TODO:проверить почему два запроса
    useEffect(() => {
        if (game_id && !currentQuestion && !isLoading)
            requestQuestion({game_id})
    }, [game_id])
    return (<>
            {isLoading ? <Loading/> : currentQuestion ? <Question question={currentQuestion} onNext={console.log}/> :
                <Loading/>}
        </>
    );
};

export default Page;
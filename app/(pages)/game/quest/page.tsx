'use client';
import React, {useEffect, useLayoutEffect} from 'react';
import Question from "@/app/components/ui/question/question";
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";

const Page = () => {
    const {requestQuestion, postAnswer} = useActions()
    const {isLoading, currentQuestion, game_id, quest_id} = useGame()

//TODO:проверить почему два запроса
    useEffect(() => {

        // if (!!game_id &&  currentQuestion.id != quest_id)
            requestQuestion({game_id})
    }, [quest_id])




    return (<>
            {isLoading ?
                <Loading/>
                :
                currentQuestion
                    ?
                    <Question question={currentQuestion} postAnswer={postAnswer}/>
                    :
                <Loading/>}
        </>
    );
};

export default Page;
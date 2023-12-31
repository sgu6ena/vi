'use client';
import React, {useEffect} from 'react';
import Question from "@/app/components/ui/question/question";
import {useActions} from "@/app/store/hooks";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";
import {useRouter} from "next/navigation";
import {LINKS} from "@/app/config/links";

const Page = () => {
  const {requestQuestion, postAnswer, buyTime, buyHelp} = useActions()
  const {isLoading, currentQuestion, game_id, quest_id, winStatus: {end_game}, isHelp} = useGame()
  const {push} = useRouter()

  useEffect(() => {
    if ((quest_id===null ||( quest_id <= 3 && quest_id >0)) && game_id) {
      requestQuestion({game_id})
    }
  }, [quest_id])


  useEffect(() => {
    if(isHelp){
      requestQuestion({game_id: game_id as number})
    }
  }, [isHelp]);


  useEffect(() => {
    if (end_game) {
      push(LINKS.WIN)
    }
  }, [end_game]);

  useEffect(() => {
    if (!end_game && !game_id) {
      push(LINKS.START)
    }
  }, [game_id])



  return (<>
      {isLoading ?
        <Loading/>
        :
        currentQuestion && !end_game
          ?
          <Question
            question={currentQuestion}
            postAnswer={postAnswer}
            buyTime={buyTime}
            buyHelp={buyHelp}
          />
          :
          <Loading/>}
    </>
  );
};

export default Page;
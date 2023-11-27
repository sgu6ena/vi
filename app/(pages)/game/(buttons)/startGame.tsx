'use client';
import React, {FC, useEffect} from 'react';
import {LINKS} from "@/app/config/links";
import {useActions} from "@/app/store/hooks";
import {useRouter} from "next/navigation";
import {useGame} from "@/app/hooks/useGame";
import Loading from "@/app/loading";
import styles from './buttons.module.scss'

const StartGame: FC<{ text: string, bonus: boolean }> = ({text, bonus}) => {
  const {startGame, resetBonusTree} = useActions()
  const {push} = useRouter()
  const {game_id, isLoading, winStatus: {end_game}} = useGame()

  const isGameStarted = Boolean(game_id) && !isLoading && !end_game
  useEffect(() => {

    if (isGameStarted) {
      push(LINKS.GAME)
    }
  }, [isGameStarted])

  const playHandler = () => {
    resetBonusTree()
    startGame({type: bonus ? 1 : 3})
  }


  return (<>
      {isGameStarted ? <Loading/> :
        <button className={bonus ? styles.bonusButton : styles.playButton}
                onClick={playHandler}>{text}
        </button>
      }</>
  );
};

export default StartGame;
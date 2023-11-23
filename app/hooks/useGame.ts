import {useAppSelector} from "@/app/store/hooks";

export const useGame=()=>{
    const GAME = useAppSelector(state => ({...state.gameReducer}));
    const isLoading = GAME.isLoading;
    const game_id = GAME.game_id;
    const quest_id =  GAME.quest_id;
    const currentQuestion = GAME.question

    const winStatus = {
        end_game:GAME.end_game,
        elka:GAME.elka,
        bonus:GAME.bonus
    }
    const timer = GAME.timer
    const isWin = GAME.isWin



    return{isLoading, game_id, currentQuestion, timer, quest_id, isWin, winStatus}
}
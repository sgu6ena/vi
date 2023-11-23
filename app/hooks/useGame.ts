import {useAppSelector} from "@/app/store/hooks";

export const useGame=()=>{
    const isLoading = useAppSelector(state => state.gameReducer.isLoading);
    const game_id =  useAppSelector(state => state.gameReducer.game_id);
    const quest_id =  useAppSelector(state => state.gameReducer.quest_id);
    const currentQuestion = useAppSelector(state => state.gameReducer.question)
    const timer = useAppSelector(state => state.gameReducer.timer)



    return{isLoading, game_id, currentQuestion, timer, quest_id}
}
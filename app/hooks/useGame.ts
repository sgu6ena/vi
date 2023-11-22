import {useAppSelector} from "@/app/store/hooks";

export const useGame=()=>{
    const isLoading = useAppSelector(state => state.gameReducer.isLoading);
    const game_id =  useAppSelector(state => state.gameReducer.game_id);
    const currentQuestion = useAppSelector(state => state.gameReducer.question)

    return{isLoading, game_id, currentQuestion}
}
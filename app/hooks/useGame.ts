import {useAppSelector} from "@/app/store/hooks";

export const useGame=()=>{
    const GAME = useAppSelector(state => (state.gameReducer));
    const isLoading = useAppSelector(state => (state.gameReducer.isLoading));
    const game_id = useAppSelector(state => (state.gameReducer.game_id));
    const quest_id =  useAppSelector(state => (state.gameReducer.quest_id));
    const currentQuestion = useAppSelector(state => (state.gameReducer.question));
    const isError = useAppSelector(state => (state.gameReducer.isError));
    const message = useAppSelector(state => (state.gameReducer.message));
    const isHelp = useAppSelector(state => (state.gameReducer.isHelp));
    const isNeedAuth =  useAppSelector(state => (state.gameReducer.isNeedAuth));


    const winStatus = {
        end_game:useAppSelector(state => (state.gameReducer.end_game)),
        elka:useAppSelector(state => (state.gameReducer.elka)),
        bonus:useAppSelector(state => (state.gameReducer.bonus))
    }
    const timer = useAppSelector(state => (state.gameReducer.timer));
    const isWin = useAppSelector(state => (state.gameReducer.isWin));


    return {isLoading, game_id, currentQuestion, timer, quest_id, isWin, winStatus, isError, message, isHelp, isNeedAuth}
}
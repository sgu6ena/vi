import {combineReducers} from "redux";
import mainReducer from "@/app/store/main/slice";
import userReducer from "@/app/store/user/slice";
import gameReducer from "@/app/store/game/slice";
import bonusTree from "@/app/store/bonusTree/slice";
import { mainAPI} from "@/app/store/services/mainAPI";

export const rootReducer = combineReducers({
    userReducer,
    gameReducer,
    bonusTree,
    mainReducer,
    [mainAPI.reducerPath]:mainAPI.reducer
})
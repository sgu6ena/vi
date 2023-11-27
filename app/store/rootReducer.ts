import {combineReducers} from "redux";
import userReducer from "@/app/store/user/slice";
import gameReducer from "@/app/store/game/slice";
import bonusTree from "@/app/store/bonusTree/slice";
import { registerAPI} from "@/app/store/services/registerAPI";

export const rootReducer = combineReducers({
    userReducer,
    gameReducer,
    bonusTree,
    [registerAPI.reducerPath]:registerAPI.reducer
})
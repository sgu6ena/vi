import {combineReducers} from "redux";
import userReducer from "@/app/store/user/slice";
import { registerAPI} from "@/app/store/services/registerAPI";

export const rootReducer = combineReducers({
    userReducer,
    [registerAPI.reducerPath]:registerAPI.reducer
})
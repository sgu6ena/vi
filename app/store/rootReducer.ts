import {combineReducers} from "redux";
import userReducer from "@/app/store/reducers/user/userSlice";
import { registerAPI} from "@/app/store/services/registerAPI";

export const rootReducer = combineReducers({
    userReducer,
    [registerAPI.reducerPath]:registerAPI.reducer
})
import {create} from "domain";
import {createSlice} from "@reduxjs/toolkit";

interface UserState{
    phone:number,
    isSendSms:boolean
}

const initialState:UserState = {
    phone:0,
    isSendSms:false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        sendSms:(state)=> {
            state.isSendSms = true
        }
    },
    extraReducers:{}
})

export default userSlice.reducer
export const usersAC = userSlice.actions
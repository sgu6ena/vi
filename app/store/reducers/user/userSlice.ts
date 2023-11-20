import {create} from "domain";
import {createSlice} from "@reduxjs/toolkit";

interface UserState{
    phone:number|null
    isSendSms:boolean
}

const initialState:UserState = {
    phone:null,
    isSendSms:false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        sendSms:(state)=> {
            state.isSendSms = true
        },
        setNumber:(state, action)=> {
            state.phone = action.payload
        }
    },
    extraReducers:{}
})

export default userSlice.reducer
export const usersAC = userSlice.actions
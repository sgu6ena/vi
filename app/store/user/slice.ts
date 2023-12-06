
import {createSlice} from "@reduxjs/toolkit";
import {postCode, postPhone} from "@/app/store/user/actions";
import Cookies from "js-cookie";

interface UserState{
    isLoading: boolean
    isSendSms:boolean
    isTrueCode:boolean
    isError:boolean
    phone:string
    token:string

    message:string
}

const initialState:UserState = {
    isError:false,
    isLoading: false,
    isSendSms:false,
    isTrueCode:false,
    phone:'',
    token:Cookies.get('at')||'',
    message:''
}

export const slice = createSlice({
    name:'user',
    initialState,
    reducers:{
        resetRegister: (state) => {
            state.isSendSms = false
            state.isError=false
            state.isLoading = false
            state.message=''
            state.phone = ''
            state.token = ''
            state.isTrueCode = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postPhone.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(postPhone.fulfilled, (state,{ payload }) => {
                state.isLoading = false
                state.phone = payload.phone
                state.token = payload.token
                state.isSendSms = true
            })
            .addCase(postPhone.rejected, (state, {payload}) => {
                state.isLoading = false

                state.isError = true
                //@ts-ignore
                state.message = payload
            })
            .addCase(postCode.pending, (state) => {
                state.isLoading = true
                state.isTrueCode = false
                state.isError = false
            })
            .addCase(postCode.fulfilled, (state,{ payload }) => {
                state.isLoading = false
                state.isTrueCode = true
            })
            .addCase(postCode.rejected, (state, {payload}) => {
                state.isLoading = false
                state.isError = true
                //@ts-ignore
                state.message = payload
                state.isTrueCode = false
            })
    }

})

export default slice.reducer
export const usersAC = slice.actions
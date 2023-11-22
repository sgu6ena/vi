
import {createSlice} from "@reduxjs/toolkit";
import {postCode, postPhone} from "@/app/store/user/actions";

interface UserState{
    isLoading: boolean
    phone:string
    token:string
    isSendSms:boolean
    isTrueCode:boolean
}

const initialState:UserState = {
    isLoading: false,
    phone:'',
    token:'',
    isSendSms:false,
    isTrueCode:false
}

export const slice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // sendSms:(state)=> {
        //     state.isSendSms = true
        // },
        // setNumber:(state, action)=> {
        //     state.phone = action.payload
        // },
        resetRegister: (state) => {
            state.isSendSms = false
            state.phone = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postPhone.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postPhone.fulfilled, (state,{ payload }) => {
                state.isLoading = false
                state.phone = payload.phone
                state.token = payload.token
                state.isSendSms = true
            })
            .addCase(postPhone.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(postCode.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postCode.fulfilled, (state,{ payload }) => {
                state.isLoading = false
                state.isTrueCode = true
            })
            .addCase(postCode.rejected, (state) => {
                state.isLoading = false
            })
    }

})

export default slice.reducer
export const usersAC = slice.actions
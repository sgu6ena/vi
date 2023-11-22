
import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "@/app/store/game/game.interface";


export const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        nextQuestion:(state)=> {
            if(state.currentGame.indexQuestion < 3 )
            state.currentGame.indexQuestion = state.currentGame.indexQuestion+1
        },
  },
    extraReducers:{}
})

export default gameSlice.reducer
export const gameAC = gameSlice.actions
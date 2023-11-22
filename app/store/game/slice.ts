import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "@/app/store/game/interface";
import {startGame} from "@/app/store/game/actions";


export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        stop:(state)=> {
            state.isLoading=true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(startGame.pending, (state) => {
                state.isLoading = true
            })
            .addCase(startGame.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.game_id = payload.game_id
            })
            .addCase(startGame.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
    }

})

export default gameSlice.reducer
export const gameAC = gameSlice.actions
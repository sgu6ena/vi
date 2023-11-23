import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "@/app/store/game/interface";
import {needAuth, postAnswer, requestQuestion, startGame, statusGame} from "@/app/store/game/actions";


export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        stop:(state)=> {
            state.isLoading=true
        },
        setTimer: (state, {payload}) => {
            state.timer = payload.time
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(startGame.pending, (state) => {
                state.isLoading = true
            })
            .addCase(startGame.fulfilled, (state, {payload}) => {
                state.quest_id=0
                state.answer_id=0
                state.isLoading = false
                state.isWin=false
                state.end_game=false
                state.elka=false
                state.game_id = payload.game_id
            })
            .addCase(startGame.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })

            .addCase(requestQuestion.pending, (state) => {
                state.isLoading = true
            })
            .addCase(requestQuestion.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.question = payload.question
                state.timer = payload.question.time
            })
            .addCase(requestQuestion.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })


            .addCase(postAnswer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postAnswer.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.question = null
                state.quest_id = state.quest_id + 1
                state.end_game = payload.end_game
                state.elka = payload.elka
                state.bonus = payload.bonus
                if (payload.end_game)
                    state.game_id = null
            })
            .addCase(postAnswer.rejected, (state) => {
                state.isLose = true
                state.isLoading = false
                state.isError = true
            })


            .addCase(statusGame.pending, (state) => {
                state.isLoading = true
            })
            .addCase(statusGame.fulfilled, (state, {payload}) => {
                state.isLoading = false
            })
            .addCase(statusGame.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })


            .addCase(needAuth.pending, (state) => {
                // state.isLoading = true
            })
            .addCase(needAuth.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.game_id = payload.game_id
                // state.timer = payload.question.time
            })
            .addCase(needAuth.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
    }


})

export default gameSlice.reducer
export const gameAC = gameSlice.actions
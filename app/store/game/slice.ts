import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "@/app/store/game/interface";
import {buyTime, needAuth, postAnswer, requestQuestion, startGame, statusGame} from "@/app/store/game/actions";


export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        stop:(state)=> {
            state.isLoading=true
        },
        setTimer: (state, {payload}) => {

            if(payload.time<=0){
                state.game_id = 0
                state.question=null
                state.isError = true
                state.message = "Время вышло"
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(startGame.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.game_id = 0
                state.isWin=false
                state.end_game=false
                state.elka=false
                state.message = ""
            })
            .addCase(startGame.fulfilled, (state, {payload}) => {
                state.quest_id=0
                state.answer_id=0
                state.isLoading = false
                state.game_id = payload.game_id
            })
            .addCase(startGame.rejected, (state , {payload}) => {
                state.isLoading = false
                state.isError = true
                state.game_id = 0
                // @ts-ignore
                state.message = payload
            })

            .addCase(requestQuestion.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.message = ""
            })
            .addCase(requestQuestion.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.question = payload.question
                state.timer = payload.question.time
            })
            .addCase(requestQuestion.rejected, (state , {payload}) => {
                state.isLoading = false
                state.isError = true
                // state.isError = false
                // state.message = ""
                state.game_id = 0
                // @ts-ignore
                state.message = payload
            })


            .addCase(postAnswer.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.message = ""
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
            .addCase(postAnswer.rejected, (state, {payload}) => {
                console.log(payload)
                state.isLose = true
                state.isLoading = false
                state.isError = true
                state.question = null
                state.game_id = 0
                // @ts-ignore
                state.message = payload
            })


            .addCase(statusGame.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.message = ""
            })
            .addCase(statusGame.fulfilled, (state, {payload}) => {
                state.isLoading = false
            })
            .addCase(statusGame.rejected, (state, {payload}) => {
                state.isLoading = false
                state.isError = true
                state.game_id = 0
                // @ts-ignore
                state.message = payload
            })


            .addCase(needAuth.pending, (state) => {
                // state.isLoading = true
                state.isError = false
                state.message = ""
            })
            .addCase(needAuth.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.game_id = payload.game_id
                // state.timer = payload.question.time
            })
            .addCase(needAuth.rejected, (state, {payload}) => {
                state.isLoading = false
                state.isError = true
                state.game_id = 0
                // @ts-ignore
                state.message =payload
            })



            .addCase(buyTime.pending, (state) => {
                // state.isLoading = true
                // state.isError = false
                // state.message = ""
            })
            .addCase(buyTime.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.timer = Number(state.timer)+30
                // state.timer = payload.question.time
            })
            .addCase(buyTime.rejected, (state, {payload}) => {
                state.isLoading = false
                state.isError = true
                state.game_id = 0
                // @ts-ignore
                state.message =payload
            })
    }


})

export default gameSlice.reducer
export const gameAC = gameSlice.actions
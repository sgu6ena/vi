import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "@/app/store/game/interface";
import {
  buyHelp,
  buyTime,
  needAuth,
  postAnswer,
  requestQuestion,
  startGame,
  statusGame
} from "@/app/store/game/actions";


export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    stop: (state) => {
      state.isLoading = true
    },
    resetGame:(state)=>{
      state.game_id=null
      state.question = null
      state.isWin = false
      state.end_game = false
      state.elka = false
      state.isError = false
      state.message = ""
    },
    setTimer: (state, {payload}) => {
      if (payload.time <= 0) {
        state.game_id = 0
        state.question = null
        state.isError = true
        state.message = "Время вышло"
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startGame.pending, (state) => {
        state.isLoading = true
        state.game_id = 0
        state.isWin = false
        state.end_game = false
        state.elka = false
        state.isError = false
        state.message = ""
      })
      .addCase(startGame.fulfilled, (state, {payload}) => {
        state.quest_id = null
        state.answer_id = 0
        state.isLoading = false
        state.isError = false
        state.message = ""
        state.game_id = payload.game_id
      })
      .addCase(startGame.rejected, (state, {payload}) => {
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
        state.isError = false
        state.message = ""
        state.question = payload.question
        state.timer = payload.question.time
        state.quest_id = payload.question.id
      })
      .addCase(requestQuestion.rejected, (state, {payload}) => {
        state.isLoading = false
        state.isError = true
        state.game_id = 0
        // @ts-ignore
        state.message = payload
      })


      .addCase(postAnswer.pending, (state) => {
        state.isLoading = true
        state.isError = false
        state.message = ""
        state.isHelp=false
      })
      .addCase(postAnswer.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.question = null
        state.isError = false
        state.message = ""
        state.end_game = payload.end_game
        state.elka = payload.elka
        state.bonus = payload.bonus
        if (state.quest_id && state.quest_id > 0) {
          state.quest_id = state.quest_id + 1
        }
      })
      .addCase(postAnswer.rejected, (state, {payload}) => {
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
        state.isError = false
        state.message = ""
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
        state.isNeedAuth = false
      })
      .addCase(needAuth.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.isNeedAuth = false
        state.isError = false
        state.message = ""
        state.game_id = payload.game_id
        // state.timer = payload.question.time
      })
      .addCase(needAuth.rejected, (state, {payload}) => {
        state.isLoading = false
        state.isError = true
        state.game_id = 0
        state.isNeedAuth = true
        // @ts-ignore
        // state.message = payload



      })



      .addCase(buyTime.fulfilled, (state, {payload}) => {
        state.timer = Number(state.timer) + 30
      })
      .addCase(buyTime.rejected, (state, {payload}) => {
        state.timer = Number(state.timer)
      })


      .addCase(buyHelp.fulfilled, (state, {payload}) => {
          state.isHelp = true
        })


  }


})

export default gameSlice.reducer
export const gameAC = gameSlice.actions
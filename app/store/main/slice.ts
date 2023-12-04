import {initialState} from "@/app/store/main/interface";
import {getSponsors, getStatus, getWinner} from "@/app/store/main/actions";
import {createSlice} from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatus.pending, (state) => {
        state.isLoading = true
        state.isError = false
        // state.drawing.time = state.drawing.time
      })
      .addCase(getStatus.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.isError = false
        state.drawing = payload

      })
      .addCase(getStatus.rejected, (state, {payload}) => {
        state.isLoading = false
        state.isError = true
      })


      .addCase(getWinner.pending, (state) => {
        state.isLoading = true
        state.isError = false

      })
      .addCase(getWinner.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.isError = false
        state.accounts = payload
      })
      .addCase(getWinner.rejected, (state, {payload}) => {
        state.isLoading = false
        state.isError = true
      })


      .addCase(getSponsors.pending, (state) => {
        state.isLoading = true
        state.isError = false

      })
      .addCase(getSponsors.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.isError = false
        state.sponsors = payload
      })
      .addCase(getSponsors.rejected, (state, {payload}) => {
        state.isLoading = false
        state.isError = true
      })

  }


})

export default mainSlice.reducer

export const mainAC = mainSlice.actions
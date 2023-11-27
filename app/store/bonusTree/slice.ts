import {createSlice} from "@reduxjs/toolkit";
import {getBonusTree} from "@/app/store/bonusTree/actions";
import {initialState} from "@/app/store/bonusTree/interface";
export const bonusTreeSlice = createSlice({
  name: 'bonusTree',
  initialState,
  reducers: {
    resetBonusTree:(state)=>{
      state.prizes=[]
      state.isLoading=false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBonusTree.pending, (state) => {
        state.isLoading = true
        state.isError = false

      })
      .addCase(getBonusTree.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.isError = false
        state.prizes = payload
      })
      .addCase(getBonusTree.rejected, (state, {payload}) => {
        state.isLoading = false
        state.isError = true

      })

  }


})

export default bonusTreeSlice.reducer

export const bonusTreeAC = bonusTreeSlice.actions
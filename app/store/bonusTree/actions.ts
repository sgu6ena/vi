import {createAsyncThunk} from "@reduxjs/toolkit";
import {gameService} from "@/app/api/api.service";
import {IBonus} from "@/app/api/types";

export const getBonusTree = createAsyncThunk<any, IBonus>(
  'getBonusTree',
  async (data, thinkApi) => {
    try {
      const response = await gameService.bonusTree(data)
      return response
    } catch (error:any) {
      return thinkApi.rejectWithValue(error.response.data.error.message);
    }
  })
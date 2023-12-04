import {createAsyncThunk} from "@reduxjs/toolkit";
import {mainService} from "@/app/api/mainService";

export const getStatus = createAsyncThunk<any  , void>(
  'getStatus',
  async (_, thinkApi) => {
    try {
      const response = await mainService.getStatus()
      return response
    } catch (error:any) {
      return thinkApi.rejectWithValue(error.response.data.error.message);
    }
  })
export const getWinner = createAsyncThunk<any  , void>(
  'getWinner',
  async (_, thinkApi) => {
    try {
        const response = await mainService.getWinner();
        if (response.length === 0) {
            const res2 = await new Promise<any>((resolve) => {
                setTimeout(async () => {
                    const result = await mainService.getWinner();
                    resolve(result);
                }, 3000);
            });

            return res2;
        } else {
            return response;
        }
    } catch (error:any) {
      return thinkApi.rejectWithValue(error.response.data.error.message);
    }
  })
export const getSponsors = createAsyncThunk<any  , void>(
  'getSponsors',
  async (_, thinkApi) => {
    try {
      const response = await mainService.getSponsor()
      return response
    } catch (error:any) {
      return thinkApi.rejectWithValue(error.response.data.error.message);
    }
  })


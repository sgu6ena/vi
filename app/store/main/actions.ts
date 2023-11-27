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
      const response = await mainService.getWinner()
      return response
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


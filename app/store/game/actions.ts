import {createAsyncThunk} from "@reduxjs/toolkit";

import {gameService, IAnswer, IResult, IType} from "@/app/api/api.service";
import {IQuestion} from "@/app/store/game/interface";


export const statusGame = createAsyncThunk(
    'statusGame',
    async (_, thinkApi) => {
        try {
            const response = await gameService.statusGame()
            return response
        } catch (error:any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })
export const startGame = createAsyncThunk<{ game_id:number }, IType>(
    'startGame',
    async (data, thinkApi) => {
        try {
            const response = await gameService.startGame(data)
            return response
        } catch (error:any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })

export const needAuth = createAsyncThunk<any, void>(
    'needAuth',
    async (_, thinkApi) => {
        try {
            const response = await gameService.needAuth()
            return response
        } catch (error:any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })


export const requestQuestion = createAsyncThunk<{ question: IQuestion }, { game_id: number }>(
    'requestQuestion',
    async (data, thinkApi) => {
        try {
            const response = await gameService.requestQuestion(data)
            return response
        } catch (error:any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })

export const postAnswer = createAsyncThunk<IResult  , IAnswer>(
    'postAnswer',
    async (data, thinkApi) => {
        try {
            const response = await gameService.answer(data)
            return response
        } catch (error:any) {

            return thinkApi.rejectWithValue(error.response.data.error.message);

        }
    })

export const buyTime = createAsyncThunk<any  , any>(
    'buyTime',
    async (_, thinkApi) => {
        try {
            const response = await gameService.buyTime()
            return response
        } catch (error:any) {

            return thinkApi.rejectWithValue(error.response.data.error.message);

        }
    })


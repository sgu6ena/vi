import {createAsyncThunk} from "@reduxjs/toolkit";
import {gameService} from "@/app/api/api.service";
import {IAnswer, IQuestion, IResult, IType} from "@/app/api/types";
import {useRouter} from "next/navigation";


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
            return {game_id:response.game_id, type:data.type}
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

export const buyTime = createAsyncThunk<any, void>(
    'buyTime',
    async (_, thinkApi) => {
        try {
            const response = await gameService.buyTime()
            return response
        } catch (error:any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })

export const buyHelp = createAsyncThunk<any, void>(
    'buyHelp',
    async (_, thinkApi) => {
        try {
            const response = await gameService.buyHelp()
            return response
        } catch (error: any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })

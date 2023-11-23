import {createAsyncThunk} from "@reduxjs/toolkit";
import {iSendCode} from "@/app/store/user/interface";
import {gameService, IAnswer, registerService} from "@/app/api/api.service";
import {IQuestion} from "@/app/store/game/interface";


export const statusGame = createAsyncThunk(
    'statusGame',
    async () => {
        try {
            const response = await gameService.statusGame()
            return response
        } catch (error) {

        }
    })
export const startGame = createAsyncThunk<{ game_id:number }, void>(
    'startGame',
    async (data, thinkApi) => {
        try {
            const response = await gameService.startGame({type:3})
            return response
        } catch (error) {

        }
    })

export const needAuth = createAsyncThunk<any, void>(
    'needAuth',
    async (_, thinkApi) => {
        try {
            const response = await gameService.needAuth()
            return response
        } catch (error) {

        }
    })


export const requestQuestion = createAsyncThunk<{ question: IQuestion }, { game_id: number }>(
    'requestQuestion',
    async (data, thinkApi) => {
        try {
            const response = await gameService.requestQuestion(data)
            return response
        } catch (error) {

        }
    })

export const postAnswer = createAsyncThunk<any, IAnswer>(
    'postAnswer',
    async (data, thinkApi) => {
        try {
            const response = await gameService.answer(data)
            return response
        } catch (error) {

        }
    })

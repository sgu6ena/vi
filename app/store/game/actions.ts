import {createAsyncThunk} from "@reduxjs/toolkit";
import {iSendCode} from "@/app/store/user/interface";
import {gameService, registerService} from "@/app/api/api.service";

export const startGame = createAsyncThunk<{ game_id:number }, void>(
    'startGame',
    async (data, thinkApi) => {
        try {
            const response = await gameService.startGame({type:3})
            return response
        } catch (error) {

        }
    })
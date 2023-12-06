import {createAsyncThunk} from '@reduxjs/toolkit'
import {registerService} from "@/app/api/api.service";
import Cookies from "js-cookie";
import {iSendCode, iSendSms} from "@/app/store/user/interface";


// Функция для проверки интернет-соединения
const isOnline = () => {
    return navigator.onLine;
};

export const postPhone = createAsyncThunk<any, iSendSms>(
    'postPhone',
    async ({phone}, thinkApi) => {
        try {
            if (!isOnline()) {
                throw new Error('Нет подключения к интернет. Проверьте ваше подключение к интернет');
            }
            const response = await registerService.postMobile({phone})
            const token = response.token
            // const currentDate = new Date();
            // const expirationTime = new Date(currentDate.getTime() + 30 * 60 * 1000);
            // Cookies.set('at', token, { expires: expirationTime });
            Cookies.set('at', token)
            return {phone, token}
        } catch (error:any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })

export const postCode = createAsyncThunk<any, iSendCode>(
    'postCode',
    async (data, thinkApi) => {
        try {
            const response = await registerService.postCode(data)
            return response
        }  catch (error:any) {
            return thinkApi.rejectWithValue(error.response.data.error.message);
        }
    })
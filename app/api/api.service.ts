import {instance} from "@/app/api/interceptor";
import {AUTH, GAME} from "@/app/config/api.methods";
import {iSendCode} from "@/app/store/user/interface";

export const registerService = {
    async postMobile({phone}:{phone:string}):Promise<{token:string}> {
        const data = await instance.post<any, any>(AUTH.BY_MOBILE,{phone})
        return data.data.data
    },
    async postCode(data:iSendCode):Promise<any> {
        const response = await instance.post<any, any>(AUTH.SMS_CODE,data)
        return response.data.data
    },
}

interface IType{
    type: 1 | 3
}
export const gameService = {
    async startGame({type = 3}: IType ): Promise<any> {
        const response = await instance.get<any, any>(GAME.START_BY_TYPE, {
            params: {
                type
            }
        })
        return response.data.data
    },

    async requestQuestion(data:{game_id:number}): Promise<any> {
        const response = await instance.post<any, any>(GAME.QUESTION,data)
        const question = response.data.data
        return {question}
    },


    async buyTime(): Promise<any>  {
        const response = await instance.get(GAME.TIME, {})
        return response.data.data
    },
}
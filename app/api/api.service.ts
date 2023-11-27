import {instance} from "@/app/api/interceptor";
import {AUTH, GAME} from "@/app/config/api.methods";
import {iSendCode} from "@/app/store/user/interface";

export const registerService = {
    async postMobile({phone}:{phone:string}):Promise<{token:string}> {
        const response = await instance.post<any, any>(AUTH.BY_MOBILE,{phone})
        return response.data.data
    },
    async postCode(data:iSendCode):Promise<any> {
        const response = await instance.post<any, any>(AUTH.SMS_CODE,data)
        return response.data.data
    },
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

    async statusGame(): Promise<{ status: number, type: number }> {
        const response = await instance.post<any, any>(GAME.STATUS)
        return response.data.data
    },
    async needAuth(): Promise<{ game_id: number }> {
        const response = await instance.get<any, any>(GAME.NEED_AUTH)
        return response.data.data
    },

    async requestQuestion(data:{game_id:number}): Promise<any> {
        const response = await instance.post<any, any>(GAME.QUESTION,data)
        const question = response.data.data
        return {question}
    },

    async answer(data: IAnswer): Promise<any> {
        const response = await instance.post<any, any>(GAME.ANSWER, data)
        return response.data.data
    },

    async buyTime(): Promise<any>  {
        const response = await instance.get(GAME.TIME, {})
        return response.data.data
    },

    async bonusTree(data:IBonus): Promise<any> {
        const response = await instance.post<any, any>(GAME.BONUS_PRIZE, data)
        return response.data.data
    },
}


export interface IAnswer {
    game_id: number,
    answer: number,
    quest_id: number
}

export interface IResult {
    end_game: boolean;
    elka: boolean;
    bonus: boolean;

}

export interface IType{
    type: 1 | 3
}

export interface IBonus{
    game_id:string
    click_id:string
}
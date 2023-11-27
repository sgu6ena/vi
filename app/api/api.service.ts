import {instance} from "@/app/api/interceptor";
import {AUTH, GAME} from "@/app/config/api.methods";
import {iSendCode} from "@/app/store/user/interface";
import {IAnswer, IBonus, IBonusPrize, IQuestion, IType} from "@/app/api/types";

export const registerService = {
  async postMobile({phone}: { phone: string }): Promise<{ token: string }> {
    const response = await instance.post<any, any>(AUTH.BY_MOBILE, {phone})
    return response.data.data
  },
  async postCode(data: iSendCode): Promise<any> {
    const response = await instance.post<any, any>(AUTH.SMS_CODE, data)
    return response.data.data
  },
}


export const gameService = {
  //старт игры, если тип = 3 - обычная игра, если тип = 1 - бонусная игра
  async startGame({type}: IType): Promise<any> {
    const response = await instance.get<any, any>(GAME.START_BY_TYPE, {
      params: {
        type
      }
    })
    return response.data.data
  },
  //проверка статуса игры
  async statusGame(): Promise<{ status: number, type: number }> {
    const response = await instance.post<any, any>(GAME.STATUS)
    return response.data.data
  },
  //проверка необходимости авторизоваться
  async needAuth(): Promise<{ game_id: number }> {
    const response = await instance.get<any, any>(GAME.NEED_AUTH)
    return response.data.data
  },
  //запросить вопрос
  async requestQuestion(data: { game_id: number }): Promise<{ question: IQuestion }> {
    const response = await instance.post<any, any>(GAME.QUESTION, data)
    const question = response.data.data
    return {question}
  },
  //отправить ответ
  async answer(data: IAnswer): Promise<any> {
    const response = await instance.post<any, any>(GAME.ANSWER, data)
    return response.data.data
  },
  // докупить время
  async buyTime(): Promise<null> {
    const response = await instance.get(GAME.TIME, {})
    return response.data.data
  },
  //отправить номер выбранного подарка и получить название подарка
  async bonusTree(data: IBonus): Promise<IBonusPrize[]> {
    const response = await instance.post<any, any>(GAME.BONUS_PRIZE, data)
    return response.data.data
  },
}
import {instance} from "@/app/api/interceptor";
import {MAIN} from "@/app/config/api.methods";
import {IMainBonus} from "@/app/api/types";

/* сервис для получения данных на главной */
export const mainService = {
  /* получить статус викторины - время до розыгрыша или викторина завешена */
  async getStatus(): Promise<any> {
    const response = await instance.get<any, any>(MAIN.DRAWING)
    return response.data.data
  },
  /* получить победителей */
  async getWinner(): Promise<any> {
    const response = await instance.get<any, any>(MAIN.WINNERS)
    return response.data.data
  },
  /* получить спонсоров */
  async getSponsor(): Promise<any> {
    const response = await instance.get<any, any>(MAIN.SPONSORS)
    return response.data.data
  },

  async postBonus(data: IMainBonus): Promise<any> {
    const response = await instance.post<IMainBonus, any>(MAIN.BONUS, data)
    return response.data.data
  },

}

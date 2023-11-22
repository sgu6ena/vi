import {instance} from "@/app/api/interceptor";
import {AUTH} from "@/app/config/api.methods";
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
import {getContentType} from "@/app/api/api.helper";
import axios from "axios";
import {BASE_URL} from "@/app/config/base_url";
import Cookies from 'js-cookie'
export const instance = axios.create({
    baseURL: BASE_URL,
    headers: getContentType(),
})

instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('at')
    if (config.headers && accessToken) {
        config.headers['HTTP-X-TOKEN'] = `${accessToken}`
    }
    return config
})
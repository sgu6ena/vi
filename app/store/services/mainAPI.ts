import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "@/app/config/base_url";
import {MAIN} from "@/app/config/api.methods";
import winner from "@/app/components/landing/winners/winner";

interface IBonus {
    account: string
    sponsor: string
    prize: string
}

interface IPostBonus {
    date: number,
    type: 'winner' | 'money'
}
export const mainAPI = createApi({
    reducerPath: 'mainAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    // tagTypes: ['Post'],
    endpoints: (build) => ({
        postWinners: build.mutation<{data: IBonus[] }, IPostBonus>({
            query: ({date, type}) => ({
                url: MAIN.BONUS,
                method: "POST",
                body: {
                    date, type
                }
            })
        }),
    })
})

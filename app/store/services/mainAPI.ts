import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL} from "@/app/config/base_url";
import {MAIN} from "@/app/config/api.methods";

export const mainAPI = createApi({
    reducerPath: 'mainAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        getSponsors:build.query({
            query:()=>({
                url:MAIN.SPONSORS
            })
        }),
    })
})

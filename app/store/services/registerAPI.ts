import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const BASEURL = "https://api.1415.idc.md/api/1415"
// const BASEURL="https://1415-dev.idc.md/api/1415"

export const registerAPI = createApi({
    reducerPath: 'registerAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASEURL}),
    endpoints: (build) => ({
        getNeedAuth:build.query({
            query:()=>({
                url:'/needAuth'
            })
        }),
        postMobile: build.mutation<any, { phone: number }>({
            query: (body) => ({
                url: '/mobile',
                method:'POST',
                body,
            })
        })
    })
})

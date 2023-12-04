import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface ILoginAuth {
    email: string
    password: string
}

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://purpleschool.ru/pizza-api-demo'}),
    tagTypes: ["AUTH"],
    endpoints: build => ({
        authLogin: build.mutation<{ access_token: string }, ILoginAuth>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            }),
            invalidatesTags: ["AUTH"]
        })
    })
})
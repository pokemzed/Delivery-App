import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ILoginUser, IRegUser, IUser} from "../../types/user.ts";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://purpleschool.ru/pizza-api-demo'}),
    //Ставим тег юзера
    tagTypes: ["User"],
    endpoints: build => ({
        authReg: build.mutation<{access_token: string}, IRegUser>({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body
            })
        }),
        authLogin: build.mutation<{ access_token: string }, ILoginUser>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            }),
            //Указывает, что тег недействителен и выполняет рефетч
            invalidatesTags: ['User'],
        }),
        getUser: build.query<IUser, string | null>({
            query: (token) => ({
                url: '/user/profile',
                method: 'GET',
                headers: {Authorization: `Bearer ${token ? token : ''}`}
            }),
            //Провайдер юзера
            providesTags: ["User"]
        })
    })
})
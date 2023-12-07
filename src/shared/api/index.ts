import {menuAPI} from "./api-list/menuAPI.ts";
import {authAPI} from "./api-list/authAPI.ts";

export const {
    useAllProductsMenuQuery,
    useGetProductMenuQuery,
} = menuAPI

export const {
    useAuthLoginMutation,
    useGetUserQuery
} = authAPI
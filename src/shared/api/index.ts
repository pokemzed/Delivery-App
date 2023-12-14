import {menuAPI} from "./api-list/menuAPI.ts";
import {authAPI} from "./api-list/authAPI.ts";

export const {
    useAllProductsMenuQuery,
    useGetProductMenuQuery,
    useLazyGetProductMenuQuery,
} = menuAPI

export const {
    useAuthLoginMutation,
    useGetUserQuery,
    useAuthRegMutation
} = authAPI
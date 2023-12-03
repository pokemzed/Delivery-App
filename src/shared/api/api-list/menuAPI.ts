import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../types/product.tsx";

export const menuAPI = createApi({
    reducerPath: 'menuAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://purpleschool.ru/pizza-api-demo'}),
    endpoints: (build) => ({
        allProductsMenu: build.query<IProduct[], string>({
            query: () => ({
                url: '/products',
            })
        })
    })
})

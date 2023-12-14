import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct, IResponseOrder} from "../../types/product.ts";
import {IProductCart} from "../../store/slices/cartSlice.ts";

export const menuAPI = createApi({
    reducerPath: 'menuAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://purpleschool.ru/pizza-api-demo'}),
    endpoints: (build) => ({
        allProductsMenu: build.query<IProduct[], string>({
            query: (q) => {
                if(q.length){
                    return `/products?name=${q}`
                }
                return '/products'
            }
        }),
        getProductMenu: build.query<IProduct, string>({
            query: (idProduct) => `/products/${idProduct}`
        }),
        createOrder: build.mutation<IResponseOrder, {products: IProductCart[], jwt: string}>({
            query: (products) => ({
                url: '/order',
                method: "POST",
                headers: {Authorization: `Bearer ${products.jwt ? products.jwt : ''}`},
                body: products.products
            })
        })
    })
})

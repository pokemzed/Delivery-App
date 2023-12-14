import {IProductCart} from "../store/slices/cartSlice.ts";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    ingredients: string[]
    image: string,
    rating: number
}
export interface IResponseOrder{
    id: 393,
    userId: number,
    status: string,
    createdAt: string,
    data: {
        products: IProductCart[]
    }
}
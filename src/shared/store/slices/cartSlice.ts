import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadState} from "../hooks-store.ts";

export const CART_PERSISTENT_STATE = 'cartData'

export interface IProductCart {
    id: number
    count: number
}

interface IStateCart {
    items: IProductCart[]
}

const initialState: IStateCart = loadState(CART_PERSISTENT_STATE) ?? {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart-slice',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<number>) => {
            const existed = state.items.find(i => i.id === action.payload)
            if (!existed) {
                state.items.push({id: action.payload, count: 1})
                return
            }
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count += 1
                }
                return 1
            })
        },
        decreaseItem: (state, action: PayloadAction<number>) => {
            const existed = state.items.find(i => i.id === action.payload)
            if (!existed) {
                return
            }
            if (existed.count === 1) {
                state.items = state.items.filter(i => i.id !== action.payload)
                return
            }
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count -= 1
                }
                return item
            })
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const {addCart, decreaseItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer
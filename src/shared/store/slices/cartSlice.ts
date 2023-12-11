import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IProductCart {
    id: number
    count: number
}

export interface IStateCart {
    items: IProductCart[]
}

const initialState: IStateCart = {
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
        }
    }
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer
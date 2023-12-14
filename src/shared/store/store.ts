import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer, {TOKEN_PERSISTENT_STATE} from './slices/authSlice.ts'
import {menuAPI} from "../api/api-list/menuAPI.ts";
import {authAPI} from "../api/api-list/authAPI.ts";
import {saveState} from "./hooks-store.ts";
import cartReducer, {CART_PERSISTENT_STATE} from './slices/cartSlice.ts'


const reducers = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    [menuAPI.reducerPath]: menuAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer
})
export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(menuAPI.middleware, authAPI.middleware)
})

store.subscribe(() => {
    saveState({token: store.getState().auth.token}, TOKEN_PERSISTENT_STATE)
    saveState(store.getState().cart, CART_PERSISTENT_STATE)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
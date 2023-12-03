import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice.ts'
import {menuAPI} from "../api/api-list/menuAPI.ts";


const reducers = combineReducers({
    counter: counterSlice,
    [menuAPI.reducerPath]: menuAPI.reducer
})
export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(menuAPI.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
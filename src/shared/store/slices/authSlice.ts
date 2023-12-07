import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadState} from "../hooks-store.ts";

export const TOKEN_PERSISTENT_STATE = 'userData'

interface IState {
    token: string | null,
}

const initialState: IState = {
    token: loadState<IState>(TOKEN_PERSISTENT_STATE)?.token ?? null,
}

export const authSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<IState>) => {
            state.token = action.payload.token
        },
        logoutUser: (state) => {
            state.token = null
        }
    }
})
export const {loginUser, logoutUser} = authSlice.actions
export default authSlice.reducer
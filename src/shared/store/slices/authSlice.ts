import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    id: number | null
    token: string | null
    email: string | null
}

const initialState: IState = {
    id: null,
    token: null,
    email: null
}

export const authSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<IState>) => {
            state.id = action.payload.id
            state.email = action.payload.email
            if (action.payload.token) {
                const userToken = action.payload.token
                state.token = userToken
                localStorage.setItem('token', userToken)
            }
        },
        logoutUser: (state) => {
            state.id = null
            state.email = null
            state.token = null
            localStorage.removeItem('token')
        }
    }
})
export const {loginUser, logoutUser} = authSlice.actions
export default authSlice.reducer
export interface IUser {
    id: number
    email: string
    passwordHash: string
    address: null | string
    name: string
    restoreToken: null | string
    phone: null | string | number
}

export interface ILoginUser {
    email: string
    password: string
}
export interface IRegUser {
    name: string,
    email: string
    password: string
}
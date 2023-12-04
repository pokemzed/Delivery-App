import {useNavigate} from "react-router-dom";

export const checkAuth = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if(!token){
        navigate('auth/login')
    }
}
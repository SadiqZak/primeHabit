import axios from "axios"

export const authoriseUserService = ({email, password})=>{
    return axios.post('/api/auth/login', {
        email, password
    })
}
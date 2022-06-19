import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "./auth-context"

const RequireAuth = ({children})=>{
    const {authToken} = useContext(AuthContext)
    const location = useLocation()
    return authToken ? children: 
    <Navigate to="/login" state={{from:location}} replace/>
}

export {RequireAuth}
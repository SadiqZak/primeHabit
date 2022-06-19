import { createContext, useState } from "react";
import { authoriseUserService } from "../services/auth-services";

const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [authToken, setAuthToken] = useState(null)
    const [authUser, setAuthUser] = useState({})

    const authoriseUser = async({email, password})=>{
        try{
            const response = await authoriseUserService({email, password})
            setAuthUser(response.data.foundUser)
            setAuthToken(response.data.encodedToken)
            return response.data
        }catch(err){
            console.error(err)
        } 
    }

    return(
        <AuthContext.Provider value={{authToken, authUser, authoriseUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}
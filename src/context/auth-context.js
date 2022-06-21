import { createContext, useState } from "react";
import { authoriseUserService } from "../services/auth-services";

const AuthContext = createContext()

const AuthProvider = ({children})=>{

    const [authToken, setAuthToken] = useState(JSON.parse(localStorage.getItem('login'))?.token)
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('login'))?.user)

    const authoriseUser = async({email, password})=>{
        try{
            const response = await authoriseUserService({email, password})
            localStorage.setItem('login', JSON.stringify({
                token: response.data.encodedToken,
                user: response.data.foundUser
            }))
            setAuthUser(response.data.foundUser) 
            setAuthToken(response.data.encodedToken)

        }catch(err){
            console.error(err)
        } 
    }

    return(
        <AuthContext.Provider value={{authToken, authUser, authoriseUser, setAuthToken, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}
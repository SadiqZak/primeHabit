import { VStack , Input, Text, Box, Button, Heading} from '@chakra-ui/react'
import React, {useState, useContext, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

export const Login = () => {
  const [userInput, setUserInput] = useState({email:"", password:""})
  const {authoriseUser} = useContext(AuthContext)
  const {authToken} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const submitHandler=(e)=>{
    e.preventDefault()
    if(userInput.email && userInput.password){
      authoriseUser({email:userInput.email, password:userInput.password})
    }
  }

  useEffect(()=>{
    if(authToken){
      return location.state?.from?.pathname ? navigate( location.state?.from?.pathname): navigate("/")
    }
  },[authToken])

  return (
    <VStack margin="5rem auto">
      <Heading size="md">Please Login to continue</Heading>
              <form onSubmit={submitHandler}>
            <VStack display="flex" flexDir="column" gap="1rem" w="100%">
                <Box w="350px">  <Text>Email:</Text>
                  <Input value={userInput.email} onChange={(e)=>setUserInput({...userInput, email:e.target.value})} type="email"/></Box>
                  <Box  w="350px">
                  <Text>Password:</Text>
                  <Input  value={userInput.password} onChange={(e)=>setUserInput({...userInput, password:e.target.value})} type="password"/>
                  </Box>
                  <Button type='submit' backgroundColor="primaryColor" w="100%">Login</Button>
                  <Button type='submit' onClick={()=>setUserInput({email:"adarshbalika@gmail.com", password: "adarshBalika123"})} w="100%">Login as Guest</Button>
            </VStack>            
                </form>
    </VStack>
  )
}

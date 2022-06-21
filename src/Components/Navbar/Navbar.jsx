import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { AuthContext } from '../../context/auth-context';

export const Navbar = () => {
    const {authToken, setAuthToken, setAuthUser} = useContext(AuthContext)
    const clickHandler = ()=>{
        localStorage.removeItem('login')
        setAuthToken(null)
        setAuthUser(null)
    }
  return (
    <VStack
        pos="sticky"
        top="0"
        zIndex="100"
        w="100%"
        h="10vh"
        backgroundColor="navbar"
        color="primaryColor"
        p={5}
      >
        <Flex w="100%" justifyContent="space-between">
          <Heading size="lg">PrimeHabit</Heading>
          {
            !authToken &&  <Link to="/login"><Button backgroundColor="primaryColor" color="navbar">Login</Button></Link>
          }
          {
             authToken &&  <Button onClick={clickHandler} color="navbar">Logout</Button>
          }
         
         
        </Flex>
      </VStack>
  )
}

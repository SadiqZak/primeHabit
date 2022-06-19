import {
  Flex,
  VStack,
  Heading,
  Input,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import React, {useContext, useEffect, useState} from "react";
import { Sidebar } from "../../Components/Sidebar";
import { HabitContext } from "../../context/habit-context";
import {AuthContext} from "../../context/auth-context"

export const AddAHabit = () => {
  const [userInput, setUserInput] = useState("")
  const {state, getAllHabits, addUserHabit} = useContext(HabitContext)
  const {authToken} = useContext(AuthContext)


  // console.log(state.habits)

  useEffect(()=>{
    if(authToken){
      getAllHabits({encodedToken:authToken})
    } 
  },[])

  const submitHandler= (e)=>{
    e.preventDefault()
    addUserHabit({encodedToken: authToken, habitData: userInput})
  }

  return (
    <Flex pos="relative" h="100%" w="100%">
      <Sidebar />
      <VStack margin="0 auto">
        <Heading>My Habit</Heading>
        <VStack>
          {/* Submitting habit */}
          <form onSubmit={submitHandler}>
            <Flex>
              <Input type="text" onChange={(e)=>setUserInput(e.target.value)}/>
              <Button type="submit">Add</Button>
            </Flex>
          </form>
        </VStack>
        <VStack>
          {/* Displaying habit */}
          <Box>Check1</Box>
          <Box>Check2</Box>
          {
            state.habits?.map((ele)=>(
              <Box>{ele}</Box>
            ))
          }
        </VStack>
      </VStack>
    </Flex>
  );
};

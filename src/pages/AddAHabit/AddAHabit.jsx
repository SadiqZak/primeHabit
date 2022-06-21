import {
  Flex,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../../Components/Sidebar";
import { HabitContext } from "../../context/habit-context";
import { AuthContext } from "../../context/auth-context";

export const AddAHabit = () => {
  const [userInput, setUserInput] = useState("");
  const [clickedMoreId, setClickedMoreId] = useState("")
  const { state, getAllHabits, addUserHabit, deleteHabit } =
    useContext(HabitContext);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    if (authToken) {
      getAllHabits({ encodedToken: authToken });
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.length !== 0) {
      addUserHabit({ encodedToken: authToken, habitData: userInput });
      setUserInput("");
    }
  };


  return (
    <Flex h="100%" w="100%">
      <Sidebar />
      <VStack margin="0 auto" w="400px">
        <Heading>My Habit</Heading>
        <VStack w="100%">
          {/* Submitting habit */}
          <form onSubmit={submitHandler}>
            <Flex>
              <Input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <Button type="submit" backgroundColor="primaryColor">
                Add
              </Button>
            </Flex>
          </form>
        </VStack>
        <VStack width="100%" padding="0.5rem">
          {state.habits.length === 0 && (
            <Heading size="md">Please add Habits</Heading>
          )}
          {state.habits?.map((ele) => (
            <Flex
              key={ele._id}
              border="1px"
              borderRadius="5px"
              borderColor="grey"
              padding="0.8rem 0.5rem"
              width="100%"
              cursor="pointer"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>{ele.habit}</Text>
              <Flex gap="0.1rem" position="relative">
                <IconButton
                  onClick={()=>setClickedMoreId(ele._id)}
                  icon={<FiMoreVertical />}
                ></IconButton>
                {clickedMoreId === ele._id &&<Box
                  pos="absolute"
                  backgroundColor="white"
                  p="0.5rem"
                  border="1px"
                  borderColor="grey"
                >
                  <Box
                  onClick={() =>{
                    deleteHabit({ encodedToken: authToken, habitId: ele._id })
                    setClickedMoreId("")
                  }
                    
                  }
                  >Delete</Box>
                </Box>}
              </Flex>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Flex>
  );
};

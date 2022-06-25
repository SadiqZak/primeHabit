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
import {toast, ToastContainer} from 'react-toastify'; //Importing toastify module
import 'react-toastify/dist/ReactToastify.css'; //Importing toastify css file
import { FiMoreVertical } from "react-icons/fi";
import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../../Components/Sidebar";
import { HabitContext } from "../../context/habit-context";
import { AuthContext } from "../../context/auth-context";

export const AddAHabit = () => {
  const [userInput, setUserInput] = useState("");
  const [userEditInput, setUserEditInput] = useState("")
  const [clickedMoreId, setClickedMoreId] = useState("");
  const [clickedEditId, setClickedEditId] = useState("");
  const { state, getAllHabits, addUserHabit, deleteHabit, editHabit } =
    useContext(HabitContext);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    if (authToken) {
      getAllHabits({ encodedToken: authToken });
    }
  }, [userEditInput]);

  

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.length !== 0) {
      addUserHabit({ encodedToken: authToken, habitData: userInput });
      setUserInput("");
      toast.success('Added Habit', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }else{
      toast.error('Please add habit', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }

  };

  const editSubmitHandler = (e)=>{
    e.preventDefault()
    toast.success('Editted successfully',{
      position: toast.POSITION.BOTTOM_RIGHT
    })
    editHabit({encodedToken:authToken, habitId: clickedEditId, habitData: userEditInput})
    setClickedEditId("")
    setUserEditInput("")

  }

  return (
    <Flex h="100%" w="100%">
      <Sidebar />
      <VStack margin="0 auto" w="400px">
        <Heading>My Habit</Heading>
        <VStack w="100%">
          {/* Submitting habit */}<ToastContainer/>
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
            >{
              clickedEditId === ele._id && 
              <form onSubmit={editSubmitHandler}>
                <Flex>
                <textarea className="text-area" value={userEditInput} onChange={(e)=>setUserEditInput(e.target.value)}/>
                <Button type="submit" backgroundColor="primaryColor">
                OK
              </Button>
                </Flex>
              </form>
            }
            {
              clickedEditId !== ele._id && 
              <Text>{ele.habit}</Text>
            }
              
              <Flex gap="0.1rem" position="relative">
                <IconButton
                  onClick={() => setClickedMoreId(ele._id)}
                  icon={<FiMoreVertical />}
                ></IconButton>
                {clickedMoreId === ele._id && (
                  <Flex
                    pos="absolute"
                    backgroundColor="white"
                    border="1px"
                    borderColor="grey"
                    zIndex="99"
                  >
                    <Box>
                      <Box
                        onClick={()=>{
                          deleteHabit({encodedToken:authToken, habitId:ele._id})
                          toast.success("Deleted habit",{
                            position: toast.POSITION.BOTTOM_RIGHT
                          })
                        }}
                        padding="0.2rem"
                        fontSize="sm"
                        _hover={{ backgroundColor: "gray.100" }}
                      >
                        Delete
                      </Box>
                      <Box borderTop="1px" borderColor="grey"></Box>
                      <Box
                        padding="0.2rem"
                        fontSize="sm"
                        _hover={{ backgroundColor: "gray.100" }}
                        onClick={()=>{
                          setClickedEditId(ele._id)
                          setUserEditInput(ele.habit)
                          setClickedMoreId("")
                        }}
                      >
                        Edit
                      </Box>
                      <Box borderTop="1px" borderColor="grey"></Box>
                      <Box
                        padding="0.2rem"
                        fontSize="sm"
                        _hover={{ backgroundColor: "gray.100" }}
                      >
                        Archive
                      </Box>
                      <Box borderTop="1px" borderColor="grey"></Box>
                      <Box
                        padding="0.2rem"
                        fontSize="sm"
                        _hover={{ backgroundColor: "gray.100" }}
                        onClick={()=>setClickedMoreId("")}
                      >
                        Cancel
                      </Box>
                    </Box>
                  </Flex>
                )}
              </Flex>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Flex>
  );
};

import './App.css'
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";
import { Home } from "./pages/Home/Home";
import { AddAHabit } from './pages/AddAHabit/AddAHabit';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <Flex flexDir="column" height="100vh">
      <VStack
        pos="sticky"
        w="100%"
        backgroundColor="navbar"
        color="primaryColor"
        p={5}
      >
        <Flex w="100%">
          <Heading size="lg">PrimeHabit</Heading>
        </Flex>
      </VStack>
      <Flex pos="relative" h="100%" w="100%" >
      {/* <Sidebar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addahabit" element={<AddAHabit />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Flex>
    </Flex>
  );
}
  
export default App;

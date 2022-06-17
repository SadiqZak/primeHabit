import "./App.css";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <VStack
        pos="fixed"
        w="100%"
        backgroundColor="navbar"
        color="primaryColor"
        p={5}
      >
        <Flex w="100%">
          <Heading size="lg">PrimeHabit</Heading>
        </Flex>
      </VStack>
      <Flex  pos="relative" top="10.5vh">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Flex>
    </div>
  );
}

export default App;

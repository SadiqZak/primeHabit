import "./App.css";
import {
  Flex,
  Heading,
  VStack
} from '@chakra-ui/react'
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <VStack pos="sticky" backgroundColor="navbar" color="primaryColor" p={5}>
        <Flex w="100%">
          <Heading size="lg">PrimeHabit</Heading>
        </Flex>
      </VStack>
     <Sidebar/>
    </div>
  );
}

export default App;

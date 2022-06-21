import "./App.css";
import { Flex} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AddAHabit } from "./pages/AddAHabit/AddAHabit";
import { Login } from "./pages/Login/Login";
import { RequireAuth } from "./context/require-auth";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <Flex flexDir="column">
      <Navbar/>
      <Flex h="100%" w="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/addahabit"
            element={
              <RequireAuth>
                <AddAHabit />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Flex>
    </Flex>
  );
}

export default App;

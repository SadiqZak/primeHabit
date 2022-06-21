import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { HabitProvider } from "./context/habit-context";
import { AuthProvider } from "./context/auth-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <HabitProvider>
            <App />
          </HabitProvider>
        </AuthProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

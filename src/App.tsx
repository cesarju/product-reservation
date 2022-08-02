import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bgColor="purple.100" h="100vh">
      <Header title="Reserva de ventas" />
      <Card />
    </Box>
  );
}

export default App;

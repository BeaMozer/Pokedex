import { createGlobalStyle } from "styled-components";
import { Router } from "./Router/Router";
import { ChakraBaseProvider } from "@chakra-ui/react";

function App() {
  const GlobalStyled = createGlobalStyle`

  html {
    font-size: 62.5%;
      
  }

`;

  return (
    <div>
      <ChakraBaseProvider>
        <GlobalStyled />
        <Router />
      </ChakraBaseProvider>
    </div>
  );
}

export default App;

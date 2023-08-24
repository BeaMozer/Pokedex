import { createGlobalStyle } from "styled-components";
import { Router } from "./Router/Router";

function App() {
  const GlobalStyled = createGlobalStyle`
  html {
    
    /* font-size: 62.5%; */
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

  return (
    <div>
      <GlobalStyled />
      <Router />
    </div>
  );
}

export default App;

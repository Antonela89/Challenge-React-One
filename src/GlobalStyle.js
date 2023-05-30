import { createGlobalStyle } from "styled-components";
import { fuentePrincipal, colorBlackDark  } from "./components/UI/variables";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: ${fuentePrincipal};
  font-size: 62.5%; /* 10px */
  margin: 0;
  padding: 0;
  }
`
export default GlobalStyle
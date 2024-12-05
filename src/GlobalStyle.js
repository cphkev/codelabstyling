
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

export default GlobalStyle;

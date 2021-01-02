import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    &::-webkit-scrollbar {
    width: 1.2rem;
    height: 1.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.myGrey};
    border-radius: 5px;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body, textarea {
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  code {
    font-family: 'Roboto', sans-serif;
  }
  
`;

export default GlobalStyle;

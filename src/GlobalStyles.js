// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  
  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;

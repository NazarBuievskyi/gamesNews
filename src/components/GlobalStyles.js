import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }

  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #7d84ff;
  }

  h3 {
    font-size: 1.3rem;
    color: #3b3b3b;
    padding: 1.5rem 0rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969
  }

  a {
    text-decoration: none;
    color: #3b3b3b;

  }
  img{
    display: block;
  }
`;
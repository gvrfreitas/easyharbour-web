import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    margin-bottom: 50px;
    font-family: "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;
  }
`;

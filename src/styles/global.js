import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Fredoka One', cursive;
  }

  html,body, #root {
    height: 100%;
    background: #191920;

    &::-webkit-scrollbar {
      width: 0px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

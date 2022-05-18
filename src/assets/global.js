import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #0063a6;
  }


  :root{
    --font-primary: #444;
    --font-white: #fff; 

    --fs-title: 32px;
    --fs-subtitle: 24px;
    --fs-text: 16px;
    --fs-input: 14px;

    --color-red: rgb(200,50,50);
    --color-red70: rgb(230,100,100);
    --color-green: rgb(50,200,50);
    --color-green70: rgb(100,230,100);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }


`;

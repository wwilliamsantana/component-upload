import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root{
  font-size: 62.5%;
  line-height: 130%;
  font-family: 'Inter', sans-serif;

}

body{
  font-size: 1.6rem;
  background-color: #FBFAFF;
  
}

input, textarea, button{
  all: unset;
  box-sizing: border-box;
}


`

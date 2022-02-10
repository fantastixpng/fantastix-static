import { createGlobalStyle } from 'styled-components'

// import './theme.css'
// import './globals.css'

export const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after {
    box-sizing: border-box;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html, body {
    // width: 100%;
    // height: 100%;
    margin: 0;
    padding: 0;
  }
`
  
  // body {
  //   background: ${({ theme }) => theme.body};
  //   font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  //   color: ${({ theme }) => theme.text};
  //   height: 100vh;
  //   margin: 0;
  //   padding: 0;
  //   transition: all 0.25s linear;
  // }
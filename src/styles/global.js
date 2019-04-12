import { createGlobalStyle } from 'styled-components'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(to top, #2a202c, #22202c);
    color: #FFF;
    font-family: Helvetica;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: Helvetica;
  }

  button {
    cursor: pointer;
  }
`

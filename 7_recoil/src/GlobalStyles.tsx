import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        background-color: #eee;
    }
    a {
        color : inherit;
        text-decoration: none;
    }
    input {
        box-sizing: border-box;
    }
`

export default GlobalStyle

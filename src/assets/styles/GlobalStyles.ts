import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #fff;
        font-size: 1.1rem;
        font-family: 'Catamaran', sans-serif;
        font-weight: 200;
        color : #000;
    }
`

export default GlobalStyles
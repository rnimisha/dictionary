import { createGlobalStyle } from 'styled-components';

import { GlobalThemeProps } from '../GlobalType/ThemeType';

const GlobalStyles = createGlobalStyle<GlobalThemeProps>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props)=>props.theme.primary};
        font-size: 1.1rem;
        font-family: 'Catamaran', sans-serif;
        font-weight: 200;
        color :${(props)=>props.theme.secondarytext};
    }
`

export default GlobalStyles
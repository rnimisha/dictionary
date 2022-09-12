import styled from "styled-components";

import { GlobalThemeProps } from "../../assets/GlobalType/ThemeType";

export const RelatedWordDiv = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 30px;
`

export const Word = styled.li<GlobalThemeProps>`
    width: 25%;
    font-size: 1.3rem;
    list-style-type: circle;
    color:${(props)=>props.theme.primarytext};
`
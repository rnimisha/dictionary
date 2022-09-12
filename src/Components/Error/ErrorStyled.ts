import styled from "styled-components";
import { GlobalThemeProps } from "../../assets/GlobalType/ThemeType";

export const ImageDiv = styled.div`
    width : 40%;
    height : auto;
    display : flex;
    justify-content: center;
    flex-direction:column;
    align-items : center;
`

export const Paragraph = styled.p<GlobalThemeProps>`
    margin-top: 5px;
    font-size: 1.5rem;
    color : ${(props)=>props.theme.primarytext};
`
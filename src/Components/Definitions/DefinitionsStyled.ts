import styled from 'styled-components'
import { GlobalThemeProps } from '../../assets/GlobalType/ThemeType'

export const PartOfSpeech = styled.h3<GlobalThemeProps>`
    /* color: #5e5853; */
    color : ${(props)=>props.theme.primarytext};
    font-weight: 300;
    font-size: 1.3rem;
`

export const DefinationList = styled.ul`
    margin-bottom: 20px;
`
export const List = styled.li<GlobalThemeProps>`
    list-style-type: circle; 
    margin-left: 20px;
    margin-bottom: 2px;
    font-size: 1.3rem;
    /* color:#5e5853; */
    color : ${(props)=>props.theme.primarytext};
`
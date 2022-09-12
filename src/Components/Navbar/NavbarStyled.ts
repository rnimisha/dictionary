import styled from 'styled-components'
import { GlobalThemeProps } from '../../assets/GlobalType/ThemeType'

export const NavContainer = styled.div<GlobalThemeProps>`
    width: 100vw;
    height: 10vh;
    background-color: ${(props)=>props.theme.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0px 20px;
    color :${(props)=>props.theme.text};
`

export const Logo = styled.h2<GlobalThemeProps>`
    font-family: 'Pacifico', cursive;
    color :${(props)=>props.theme.secondarytext};
    text-decoration: none;
    margin-left: 20px;
`
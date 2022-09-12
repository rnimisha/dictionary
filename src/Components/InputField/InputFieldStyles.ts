import styled from 'styled-components'
import { GlobalThemeProps } from '../../assets/GlobalType/ThemeType'

export const FormStyled = styled.form`
    width: 100%;
    margin-top : -13px;
    display: flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
`

export const SearchBar= styled.input.attrs({
    type : 'text'
})`
    width : 70%;
    border:none;
    background: none;
    font-size: 1.3rem;
    color: #555;
    padding:20px 10px 20px 5px;
    margin-bottom: 30px;
    border-radius: 59px;
    background: #ededed;
    box-shadow: inset 25px 25px 50px #d5d5d5, inset -25px -25px 50px #ffffff;
    padding-left: 30px;
    
    &:focus{
        outline: 2px solid #E3D9D1;
    }
`

export const ButtonStyled = styled.button`
    background-color: #E3D9D1;
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 2px 30px;
    line-height: 50px;
    text-align: center;
    width : 200px;
    margin-top: 15px;

    &:hover{
        background-color: #fff;
    }
`

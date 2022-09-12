import styled from 'styled-components'

export const FormStyled = styled.form`
    width: 100%;
    margin-top : -13px;
    display: flex;
    justify-content : center;
    align-items : center;
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
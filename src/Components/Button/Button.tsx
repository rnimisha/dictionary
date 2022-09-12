import React from 'react'
import { ButtonStyled } from './ButtonStyled'
import {useNavigate} from 'react-router-dom'

const Button = () => {

    const navitage = useNavigate()

    return (
        <ButtonStyled onClick={()=>{navitage('meaning/word')}}>Search</ButtonStyled>
    )
}

export default Button
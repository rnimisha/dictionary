import React from 'react'
import {useNavigate} from 'react-router-dom'

//styles
import { ButtonStyled } from './ButtonStyled'

//type
type PropTypes = {
    word : string
}

const Button = ({word}: PropTypes) => {

    const navitage = useNavigate()

    return (
        <ButtonStyled onClick={()=>{navitage(`meaning/${word}`)}}>Search</ButtonStyled>
    )
}

export default Button
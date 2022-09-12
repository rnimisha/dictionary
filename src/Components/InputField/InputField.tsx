import React from 'react'
import {SearchBar, FormStyled} from './InputFieldStyles'

const InputField = () => {
  return (
    <FormStyled>
        <SearchBar type="text" placeholder='search......'/>
    </FormStyled>
  )
}

export default InputField
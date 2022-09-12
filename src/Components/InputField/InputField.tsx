import React from 'react'

//styles
import {SearchBar, FormStyled} from './InputFieldStyles'

const InputField = () => {
  return (
    <FormStyled>
        <SearchBar type="text" placeholder='search......'/>
    </FormStyled>
  )
}

export default InputField
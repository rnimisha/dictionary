import React from 'react'

//styles
import {SearchBar, FormStyled} from './InputFieldStyles'

type PropTypes ={
  word : string,
  setWord : React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({word, setWord}: PropTypes) => {
  return (
    <FormStyled>
        <SearchBar type="text" placeholder='search......' value={word} onChange={(e)=>{setWord(e.target.value)}}/>
    </FormStyled>
  )
}

export default InputField
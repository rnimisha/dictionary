import React from 'react'
import {useNavigate} from 'react-router-dom'

//styles
import {SearchBar, FormStyled, ButtonStyled} from './InputFieldStyles'

type PropTypes ={
  word : string,
  setWord : React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({word, setWord}: PropTypes) => {
  const navitage = useNavigate()

  const searchMeaning = (e: React.FormEvent)=>{
    e.preventDefault();
    if(word.trim() === '')
    {
      alert('Enter word first');
      return;
    }
    navitage(`meaning/${word}`)
  }
  
  return (
    <FormStyled onSubmit={searchMeaning}>
        <SearchBar type="text" placeholder='search......' value={word} onChange={(e)=>{setWord(e.target.value)}}/>
        <ButtonStyled type='submit'>Search</ButtonStyled>
    </FormStyled>
  )
}

export default InputField
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//styles
import {SearchBar, FormStyled, ButtonStyled} from './InputFieldStyles'

//types
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
      toast.error('Enter word first!');
      return;
    }
    navitage(`meaning/${word}`)
  }
  
  return (
    <FormStyled onSubmit={searchMeaning}>
        <ToastContainer />
        <SearchBar type="text" placeholder='search......' value={word} onChange={(e)=>{setWord(e.target.value)}}/>
        <ButtonStyled type='submit'>Search</ButtonStyled>
    </FormStyled>
  )
}

export default InputField
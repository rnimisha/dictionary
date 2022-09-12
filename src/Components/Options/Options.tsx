import React from 'react'
import { MiniDiv, OptionContainer, Span } from './OptionsStyled'

type PropTypes ={
  optionSelected: 'Definition' | 'Synonym'| 'Antonym',
  setOptionSelected : React.Dispatch<React.SetStateAction<'Definition' | 'Synonym'| 'Antonym'>>
}
const Options = ({optionSelected, setOptionSelected} : PropTypes) => {
  return (
    <OptionContainer>
        <MiniDiv onClick={()=>{setOptionSelected('Definition')}} active ={optionSelected === 'Definition'}><Span active ={optionSelected === 'Definition'}>Defination</Span></MiniDiv>
        <MiniDiv onClick={()=>{setOptionSelected('Synonym')}} active ={optionSelected === 'Synonym'}><Span active ={optionSelected === 'Synonym'}>Synomyns</Span></MiniDiv>
        <MiniDiv onClick={()=>{setOptionSelected('Antonym')}} active ={optionSelected === 'Antonym'}><Span active ={optionSelected === 'Antonym'}>Antonymns</Span></MiniDiv>
    </OptionContainer>
  )
}

export default Options
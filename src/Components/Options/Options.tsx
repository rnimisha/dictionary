import React from 'react'
import { MiniDiv, OptionContainer, Span } from './OptionsStyled'

const Options = () => {
  return (
    <OptionContainer>
        <MiniDiv active ={true}><Span active ={true}>Defination</Span></MiniDiv>
        <MiniDiv active ={false}><Span active ={false}>Synomyns</Span></MiniDiv>
        <MiniDiv active ={false}><Span active ={false}>Antonymns</Span></MiniDiv>
    </OptionContainer>
  )
}

export default Options
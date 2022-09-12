import React from 'react'

//styles
import {WordHeaderContainer, Word, WordHeading, Span, VolumeIcon} from './WordHeaderStyled'

const WordHeader = () => {
  return (
    <WordHeaderContainer>
        <Word>
            <WordHeading>Word here</WordHeading>
           <Span>phonetic here</Span>
        </Word>
        <div>
            <VolumeIcon/>
        </div>
       
    </WordHeaderContainer>
  )
}

export default WordHeader
